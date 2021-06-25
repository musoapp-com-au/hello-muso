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


  //TODO: Fix this up with some better song creation/hypermedia logic.
  addSong(title: string): void {
    title = title.trim();
    if(!title) { return;}
      this.dataService.addSong(this.songList.createSongAction)
      .subscribe(newSong =>{
      console.debug("Added - " + newSong.title)
      this.songList.songs.push(newSong);

    })
  }

}
