import {CommonRoutesConfig} from '../common/common.routes.config';
import express, {Request, Response} from 'express';
import SongsController from './songs.controller';

export class SongRoutes extends CommonRoutesConfig {

    constructor(app: express.Application) {
        super(app, 'SongRoutes');
    }

    configureRoutes() {

        this.app
            .route('/songs')
            .get(SongsController.listSongs)


        return this.app;
    }
}