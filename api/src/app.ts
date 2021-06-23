
import dotenv from 'dotenv';
const dotenvResult = dotenv.config();
if (dotenvResult.error) {
    throw dotenvResult.error;
}

import express from "express";
import cors from "cors";
import compression from "compression"
import * as http from "http";
import * as winston from 'winston';
import * as expressWinston from 'express-winston';


import { CommonRoutesConfig } from "./common/common.routes.config";
import { SongRoutes } from "./songs/songs.routes.config";

const app: express.Application = express();
const server: http.Server = http.createServer(app)
const port = 3000;
const routes: CommonRoutesConfig[] = []

// Configure for JSON based payloads
app.use(express.json());
app.use(cors());
app.use(compression());

//Setup Winston middleware
const loggerOptions: expressWinston.LoggerOptions = {
    transports: [new winston.transports.Console()],
    format: winston.format.combine(
        winston.format.json(),
        winston.format.prettyPrint(),
        winston.format.colorize({ all: true })
    ),
};

if (!process.env.DEBUG) {
    //Turn off metadata if not running in Debug mode.
    loggerOptions.meta = false; 
}

//Add logging
app.use(expressWinston.logger(loggerOptions));

// Add song routes
routes.push(new SongRoutes(app))


const runningMessage = `Express Server  running at http://localhost:${port}`;
app.get('/', (req: express.Request, res: express.Response) => {
    res.status(200).send(runningMessage)
});



server.listen(port, () => {

    // Single exception to tslint so we can see that server has started
    // tslint:disable-next-line:no-console
    console.log(runningMessage)
})