import { Injectable } from '@angular/core';
import { Song, SongList } from './models/song.model';
import { SongListViewModel, SongViewModel } from './models/song.viewModel';

@Injectable({providedIn: 'root'})
export class SongDataParser {

    public translateSongs(songList: SongList): SongListViewModel{
        // TODO: Add fault handling in isntance where create doesn't exist.
        return {
            songs: songList.songs.map<SongViewModel>(songToViewModel),
            createSongAction: songList.actions[0].href 
        }
    }
}

function songToViewModel(song: Song){
    var deleteActionIndex = song.actions.findIndex(a => a.name === "remove-song");
    return {
        title: song.title,

        canDelete: deleteActionIndex >= 0,
        deleteAction: song.actions[deleteActionIndex].href
    } as SongViewModel
}

