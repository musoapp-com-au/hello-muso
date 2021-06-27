import { Component, OnInit } from '@angular/core';
import { SongDataService } from './song-data.service';
import {SongListViewModel, SongViewModel} from './models/song.viewModel'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {

  #newTitle: string = ''

  songList: SongListViewModel;
  title = 'Song List';
  constructor(private dataService: SongDataService) { 
    this.songList = {
      songs: [],
      createSongAction: ''
    }     
  }

  ngOnInit(){
    this.getSongs();
  }

  getSongs(): void {
    this.dataService.getSongs()
      .subscribe(songList => this.songList = songList);
  }

  deleteSong(deleteAction: string): void {
    //Hide locally
    this.songList.songs = this.songList.songs.filter(s => s.deleteAction !== deleteAction)
    this.dataService.deleteSong(deleteAction).subscribe();
  }

  addSong(title: string): void {
    title = title.trim();
    if(!title || this.songList.songs.some(s => s.title === title)) { return;} 
    
    this.dataService.addSong(this.songList.createSongAction, title)
      .subscribe(newSong =>{
        this.songList.songs.push(newSong);
    })
  }

}
