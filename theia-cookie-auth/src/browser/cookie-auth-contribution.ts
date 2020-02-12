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
            const cookie = {
                key: process.env.COOKIE_NAME,
                value: process.env.COOKIE_VALUE,
                error: process.env.ERROR_MESSAGE
            }
            
            if (cookie.key in request.cookies === false) {
                response.status(401).send(cookie.error)
                return
            } else {
                next()
            }
        })
    }
}