import "express-session";

declare module "express-session" {
    interface SessionData {
        tkn: string;
        state: string;
    }
}