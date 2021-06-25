import { Injectable } from '@angular/core';
import { Song } from './models/song.model';
import { SongViewModel } from './models/song.viewModel';

@Injectable({providedIn: 'root'})
export class SongDataParser {

    public translateSongs(songs: Array<Song>): SongViewModel[]{
        return songs.map<SongViewModel>(songToViewModel)
    }

    // public translateSong(song: Song): SongViewModel {
    //     return songToViewModel(song);
    // }
}

function songToViewModel(song: Song){
    var deleteActionIndex = song.actions.findIndex(a => a.name === "delete");
    return {
        title: song.title,

        canDelete: deleteActionIndex >= 0,
        deleteAction: song.actions[deleteActionIndex].href
    } as SongViewModel
}

