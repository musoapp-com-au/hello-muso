import express from 'express';
import songsService from './songs.service';

class SongsController{
    async listSongs(req: express.Request, res: express.Response){
        const songs = await songsService.list();
        res.status(200).send(songs);
    }
}

export default new SongsController();