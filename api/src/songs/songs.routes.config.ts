import {CommonRoutesConfig} from '../common/common.routes.config';
import express from 'express';
import SongsController from './songs.controller';
import { ISongAction, SongIdString } from './dtos/song.dto';
import SongsMiddleWare from './middleware/songs.middleware';

export class SongRoutes extends CommonRoutesConfig {

    constructor(app: express.Application) {
        super(app, 'SongRoutes');
    }

    // TODO: Let's change the way we handle routing.
    // https://bulkan-evcimen.com/using_express_router_instead_of_express_namespace

    configureRoutes() {

        let songActions: ISongAction[] = [
            {name: "remove-song", method: "DELETE", href: `/api/songs/${SongIdString}`},
            {name: "edit-song", method: "PUT", href: `/api/songs/${SongIdString}`}
        ]

        this.app
            .route('/api/songs')
            .get((req, res) => SongsController.listSongs(req, res, songActions))
            .post((req, res) => SongsController.createSong(req, res, songActions));


        const songIdParam: string = "songId";
        this.app.param(songIdParam, SongsMiddleWare.extractSongId);    
        this.app
            .route(`/api/songs/:${songIdParam}`) //TODO: Check if song exists first.      
            .delete(SongsController.removeSong)       
            .put((req, res) => SongsController.updateSong(req, res, songActions));

        return this.app;
    }
}
