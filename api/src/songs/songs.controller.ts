import express from 'express';
import songsService from './songs.service';
import { SongDto, ISongAction, IdentifierSongAction } from './dtos/song.dto';
import { Document } from 'mongoose';

function docToDto(document: Document<any, any>[], actions: ISongAction[])
{
    
    return document.map(d => d.toObject({ transform: (doc, ret) => 
        {
            return {
                title: ret.title,
                actions: actions.map(a => new IdentifierSongAction(a, ret._id))
            } as SongDto;
        }}));
}

class SongsController{

    async listSongs(req: express.Request, res: express.Response, actions: ISongAction[]){
        const songs = await songsService.list().
            then((d) => docToDto(d, actions));


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

    async createSong(req: express.Request, res: express.Response){
        // TODO: Hypermedia here - return HATEOAS object
        const newSong = await songsService.create(req.body);
        res.status(201).send(newSong);
    }
}

export default new SongsController();
