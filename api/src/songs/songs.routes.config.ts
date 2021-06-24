import {CommonRoutesConfig} from '../common/common.routes.config';
import express from 'express';
import SongsController from './songs.controller';
import { ISongAction, SongIdString } from './dtos/song.dto';
import SongsMiddleWare from './middleware/songs.middleware';

export class SongRoutes extends CommonRoutesConfig {

    constructor(app: express.Application) {
        super(app, 'SongRoutes');
    }

    configureRoutes() {

        let songActions: ISongAction[] = [
            {name: "delete", method: "DELETE", href: `api/songs/${SongIdString}`}
        ]

        this.app
            .route('/api/songs')
            .get((req, res) => SongsController.listSongs(req, res, songActions))
            .post(SongsController.createSong);


        const songIdParam: string = "songId";
        this.app.param(songIdParam, SongsMiddleWare.extractSongId);    
        this.app
            .route(`/api/songs/:${songIdParam}`)
            .delete(SongsController.removeSong);
            //TODO: Check if song exists first.

        return this.app;
    }
}
