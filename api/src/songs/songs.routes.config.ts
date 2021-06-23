import {CommonRoutesConfig} from '../common/common.routes.config';
import express from 'express';
import SongsController from './songs.controller';

export class SongRoutes extends CommonRoutesConfig {

    constructor(app: express.Application) {
        super(app, 'SongRoutes');
    }

    configureRoutes() {

        this.app
            .route('/api/songs')
            .get(SongsController.listSongs)
            .post(SongsController.createSong)

        return this.app;
    }
}