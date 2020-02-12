import { injectable } from "inversify";
import { Application } from "express";
import { BackendApplicationContribution } from "@theia/core/lib/node/backend-application";

require("dotenv").config();
var process = require("process");
var cookieParser = require('cookie-parser');

@injectable()
export class TheiaCookieAuthContribution implements BackendApplicationContribution {

    configure(app: Application): void {
        app.use(cookieParser());
        app.use((request, response, next) => {
            const env = {
                key: process.env.COOKIE_NAME,
                value: process.env.COOKIE_VALUE,
                error: process.env.ERROR_MESSAGE
            }

            if (!(env.key in request.cookies) || request.cookies[env.value] !== env.value) {
                response.status(401).send(env.error)
                return
            } else {
                next()
            }
        })
    }
}