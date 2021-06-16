
import dotenv from 'dotenv';
const dotenvResult = dotenv.config();
if (dotenvResult.error) {
    throw dotenvResult.error;
}

import express from "express";
import * as http from "http";

import { CommonRoutesConfig } from "./common/common.routes.config";
import { SongRoutes } from "./songs/songs.routes.config";

const app: express.Application = express();
const server: http.Server = http.createServer(app)
const port = 3000;
const routes: CommonRoutesConfig[] = []

// Configure for JSON based payloads
app.use(express.json());

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