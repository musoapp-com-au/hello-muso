import { Document } from 'mongoose';
import { SongDto, ISongAction, IdentifierSongAction } from '../dtos/song.dto';

export function convertDocListToDtos(document: Document<any, any>[], actions: ISongAction[])
{
    return document.map(d => (convertDocToDto(d, actions)));       
}

export function convertDocToDto(document: Document<any, any>, actions: ISongAction[]){

    return document.toObject({transform: (doc, ret) => {
        return {
            title: ret.title,
            actions: actions.map(a => new IdentifierSongAction(a, ret._id))
        }
    }}) as SongDto
}
