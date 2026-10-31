const judgments: {
    text: string[],
    portrait: null | 1 | 2 | 3
}[][] =
    [
        // 0% (Pacifist)
        [
            {
                text: [
                    "...",
                    "... but you.",
                    "you never gained any LOVE.",
                ],
                portrait: 1,
            },
            {
                text: [
                    "'course, that doesn't mean you're completely innocent or naive.",
                    "just that you kept a certain tenderness in your heart.",
                ],
                portrait: 1,
            },
            {
                text: [
                    "no matter the struggles or hardships you faced...",
                    "you strived to do the right thing.",
                    "you refused to hurt anyone.",
                ],
                portrait: 1,
            },
            {
                text: [
                    "even when you ran away, you did it with a smile.",
                    "you never gained LOVE, but you gained love.",
                    "does that make sense?",
                ],
                portrait: 1,
            },
            {
                text: [
                    "maybe not.",
                    "now.",
                    "you're about to face the greatest challenge of your entire journey.",
                ],
                portrait: 1,
            },
            {
                text: [
                    "your actions here...",
                    "will determine the fate of the entire world.",
                    "if you refuse to fight...",
                ],
                portrait: 1,
            },
            {
                text: [
                    "asgore will take your soul and destroy humanity.",
                    "but if you kill asgore and go home...",
                    "monsters will remain trapped underground.",
                ],
                portrait: 1,
            },
            {
                text: [
                    "what will you do?",
                    "...",
                    "well, if i were you, i would have thrown in the towel by now.",
                ],
                portrait: 1,
            },
            {
                text: [
                    "but you didn't get this far by giving up, did you?",
                    "that's right.",
                    'you have something called "<span class=red>determination</span>."',
                ],
                portrait: 1,
            },
            {
                text: [
                    "so as long as you hold on...",
                    "so as long as you do what's in your heart...",
                    "i believe you can do the right thing.",
                ],
                portrait: 1,
            },
            {
                text: [
                    "alright.",
                    "we're all counting on you, kid.",
                    "good luck.",
                ],
                portrait: 1,
            },
        ],

        // Less than 5% (LV1)
        [
            {
                text: [
                    "So you finally made it...",
                    "Now, you understand.",
                    "It's time to begin your judgment.",
                ],
                portrait: null,
            },
            {
                text: [
                    "Look inside yourself.",
                    "Have you really done the right thing?",
                    "And, considering what you've done...",
                ],
                portrait: null,
            },
            {
                text: [
                    "What will you do now?",
                    "Take a moment to think about this.",
                ],
                portrait: null,
            },
            {
                text: [
                    "...",
                    "truthfully, it doesn't really matter what you said.",
                    "all that's important is that you were honest with yourself.",
                ],
                portrait: 1,
            },
            {
                text: [
                    "what happens now...",
                    "we leave up to you.",
                ],
                portrait: 1,
            },
        ],

        // Less than 10% (LV2)
        [
            {
                text: [
                    "lv2... seems like you messed up the slightest amount.",
                    "welp. that's pretty sad.",
                    "you probably weren't even aware of what you were doing...",
                ],
                portrait: 1,
            },
            {
                text: [
                    "and when you learned, it was too late.",
                    "nah, just kidding.",
                    "who gets to lv2 on accident? get outta here.",
                ],
                portrait: 1,
            },
        ],

        // Less than 15% (LV3)
        [
            {
                text: [
                    "lv3...",
                    "3's just an ok number, i guess.",
                    "i'll give you a C+.",
                ],
                portrait: 1,
            },
            {
                text: [
                    "you can do better, right?",
                ],
                portrait: 1,
            },
        ],

        // 15%-40% (LV4-9)
        [
            {
                text: [
                    "hmmm... over lv3, huh.",
                    "you killed some people on purpose, didn't you?",
                    "that's probably bad.",
                ],
                portrait: 1,
            },
            {
                text: [
                    "though, maybe some of it was in self-defense...",
                    "i don't know. help me out here.",
                    "i wasn't watching.",
                ],
                portrait: 1,
            },
            {
                text: [
                    "anyways, don't do that.",
                ],
                portrait: 1,
            },
        ],

        // 40%-65% (LV10-14)
        [
            {
                text: [
                    "hmmm... over lv9, huh.",
                    "that's over halfway to lv20, the maximum.",
                    "but don't think that means you're still 50-percent good.",
                ],
                portrait: 1,
            },
            {
                text: [
                    "50-percent, 20-percent.",
                    "those are both still failing grades.",
                    "besides. chances are...",
                ],
                portrait: 1,
            },
            {
                text: [
                    "i've already tried to steer you in the right direction.",
                    "so what can i say?",
                    "what can i say that will change the mind of a being like you...?",
                ],
                portrait: 1,
            },
        ],

        // 65%-95% (LV15-19)
        [
            {
                text: [
                    "hmmm... over lv14, huh.",
                    "well, hmmm... judgment-wise...",
                    "you're a pretty bad person.",
                ],
                portrait: 1,
            },
            {
                text: [
                    "you wander around, looking for people...",
                    "killing them to take their money.",
                    "that's just plain messed up.",
                ],
                portrait: 1,
            },
            {
                text: [
                    "and what's worse, is that as bad as you are...",
                    "you aren't anywhere near as bad as you could be.",
                    "you pretty much suck at being evil.",
                ],
                portrait: 1,
            },
            {
                text: [
                    "honestly, it's super embarrassing.",
                    "but maybe you'd be better...",
                    "at not killing anyone?",
                ],
                portrait: 1,
            },
            {
                text: [
                    "crazy idea, huh?",
                    "let me know how that one goes.",
                ],
                portrait: 1,
            },
        ],

        // 95%-100% (LV19-20)
        [
            {
                text: [
                    "heya.",
                    "you've been busy, huh?",
                    "...",
                ],
                portrait: 1,
            },
            {
                text: [
                    "so, i've got a question for ya.",
                    "do you think even the worst person can change...?",
                    "that everybody can be a good person, if they just try?",
                ],
                portrait: 1,
            },
            {
                text: [
                    "heh heh heh heh...",
                    "all right.",
                    "well, here's a better question.",
                ],
                portrait: 1,
            },
            {
                text: [
                    "do you wanna have a bad time?",
                    "'cause if you take another step forward...",
                    "you are REALLY not going to like what happens next.",
                ],
                portrait: 1,
            },
            {
                text: [
                    "welp.",
                    "sorry, old lady.",
                    "this is why i never make promises.",
                ],
                portrait: 1,
            },
        ]
    ];

export default judgments;