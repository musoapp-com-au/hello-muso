import express from 'express';
import songsService from './songs.service';
import { ISongAction } from './dtos/song.dto';
import { convertDocListToDtos, convertDocToDto } from './middleware/songs.mapping';
import { log } from 'winston';


class SongsController{

    async listSongs(req: express.Request, res: express.Response, actions: ISongAction[]){
        const songs = await songsService.list().
            then((d) => convertDocListToDtos(d, actions));


        res.status(200).send( 
            {songs: songs, 
            actions: [
                {
                    name: "add-song",
                    method: "POST",
                    href: req.path.substring(1) //TODO: Remove leading '/' from path - this is a hack for now.
                }
            ]
        });
    }

    async removeSong(req: express.Request, res: express.Response){
        await songsService.deleteById(req.body.id);
        res.status(204).send();
    }

    async updateSong(req: express.Request, res: express.Response){
        // TODO: Update song - currently stubbed.
        res.status(200).send();
    }

    async createSong(req: express.Request, res: express.Response, actions: ISongAction[]){
        const newSong = await songsService.create(req.body)
            .then((d) => convertDocToDto(d, actions));
        res.status(201).send(newSong);
    }
}

export default new SongsController();
