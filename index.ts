import express from "express";
import session from "express-session";
import path from "node:path";
import "dotenv/config";
import crypto from 'node:crypto';
import judgments from "./judgments";

const randomState = () => crypto.randomBytes(32).toString("base64url");

const app = express();
app.set("view engine", "ejs");
app.set("views", path.join(process.cwd(), "views"));

app.use(
    session({
        secret: process.env.SESSION_SECRET,
        resave: false,
        saveUninitialized: true
    })
);

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/public", express.static(path.join(process.cwd(), "public")));

type HackatimeStats = {
    categories: Record<string, number>;
    grand_total: {
        total_seconds: number;
        digital: string;
        hours: number;
        minutes: number;
        seconds: number;
    };
    is_up_to_date: boolean;
};

async function getAIPercentage(tkn: string): Promise<number> {
    const base = "https://hackatime.hackclub.com/api/v1/users/my/stats?total_seconds=true";

    const headers = {
        Authorization: `Bearer ${tkn}`
    };

    const [withoutAI, withAI] = await Promise.all([
        fetch(`${base}&no_ai_coding=true`, { headers }),
        fetch(`${base}&no_ai_coding=false`, { headers })
    ]);

    if (!withoutAI.ok || !withAI.ok) {
        throw new Error(
            `Hackatime API error: ${withoutAI.status}, ${withAI.status}`
        );
    }

    const [withoutStats, withStats] = await Promise.all([
        withoutAI.json(),
        withAI.json()
    ]) as [{ total_seconds: number }, { total_seconds: number }];

    const coding = Number(withoutStats.total_seconds);
    const total = Number(withStats.total_seconds);

    return total > 0
        ? ((total - coding) / total) * 100
        : 0;
}

app.get('/', (req, res) => {
    res.render('index')
});

app.get('/login', (req, res) => {
    if (req.session.tkn) return res.redirect('/judge');

    const state = randomState();

    req.session.state = state;

    const params = new URLSearchParams({
        client_id: process.env.CLIENT_ID,
        redirect_uri: process.env.REDIRECT_URI,
        response_type: 'code',
        scope: 'profile read',
        state
    });

    req.session.save();

    return void res.redirect(
        `https://hackatime.hackclub.com/oauth/authorize?${params}`
    );
});

const OAUTH_ERROR_MESSAGES: Record<string, string> = {
    access_denied: "The resource owner or authorization server denied the request.",
    invalid_scope: "The requested scope is invalid, unknown, or malformed.",
    server_error: "The authorization server encountered an unexpected condition that prevented it from fulfilling the request.",
    temporarily_unavailable: "The authorization server is currently unable to handle the request due to a temporary overloading or maintenance of the server.",
};

app.get('/callback', async (req, res) => {
    const { code, state, error } = req.query;

    if (typeof state !== "string") {
        return void res.status(400).send('Invalid OAuth2 state.');
    }

    if (!req.session.state || req.session.state !== state) {
        return void res.status(400).send('Invalid OAuth2 state.');
    }

    delete req.session.state;

    if (typeof error === "string") {
        return void res.status(400).send(
            OAUTH_ERROR_MESSAGES[error] ||
            req.query.error_description ||
            'Unknown OAuth2 error.'
        );
    }

    if (typeof code !== "string") {
        return void res.status(400).send('Missing OAuth2 code.');
    }

    const tokenResponse = await fetch('https://hackatime.hackclub.com/oauth/token', {
        method: 'POST',
        headers: {
            "Content-Type": "application/x-www-form-urlencoded",
        },
        body: new URLSearchParams({
            client_id: process.env.CLIENT_ID,
            client_secret: process.env.CLIENT_SECRET,
            code,
            redirect_uri: process.env.REDIRECT_URI,
            grant_type: 'authorization_code'
        })
    }).then(res => res.json()) as any;

    req.session.tkn = tokenResponse.access_token;

    req.session.save();

    return res.redirect('/judge');
})

app.get('/judge', async (req, res) => {
    const { tkn = null } = req.session;

    if (!tkn) return res.redirect('/login');

    const aipercent = await getAIPercentage(tkn);

    const judgment = (() => {
        if (aipercent >= 95) return 7
        if (aipercent >= 65) return 6
        if (aipercent >= 40) return 5
        if (aipercent >= 15) return 4
        if (aipercent >= 10) return 3
        if (aipercent >= 5) return 2
        if (aipercent > 0) return 1
        return 0
    })();

    res.render('judgment', { judgment: judgments[judgment], i: judgment, percent: aipercent })
});

app.get('/judge/:idx', async (req, res) => {
    let judgment;

    try {
        judgment = parseInt(req.params.idx)

        if (judgment < 0 || judgment > 7) throw new Error()
    } catch (err) {
        return res.render('judgment', {
            judgment: [
                {
                    text: ["good try, kiddo."],
                    portrait: 1
                }
            ], i: 7
        })
    }

    res.render('judgment', { judgment: judgments[judgment], i: judgment, percent: -1 })
});

app.listen(38482);