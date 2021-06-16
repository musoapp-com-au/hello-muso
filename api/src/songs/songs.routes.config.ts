import {CommonRoutesConfig} from '../common/common.routes.config';
import express from 'express';

export class SongRoutes extends CommonRoutesConfig {
    constructor(app: express.Application) {
        super(app, 'SongRoutes');
    }

    configureRoutes() {

        this.app.route('/songs')
            .get((req: express.Request, res: express.Response) => {
                res.status(200).send(`List of all songs`);
            })


        return this.app;
    }
}