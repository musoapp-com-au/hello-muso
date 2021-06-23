import express from 'express';
import songsService from './songs.service';

class SongsController{
    async listSongs(req: express.Request, res: express.Response){
        const songs = await songsService.list();
        res.status(200).send(songs);
    }

    async createSong(req: express.Request, res: express.Response){
        // TODO: Hypermedia here - return HATEOAS object
        const newSong = await songsService.create(req.body.title);
        res.status(201).send(newSong);
    }
}

export default new SongsController();