import { Component, OnInit } from '@angular/core';
import { SongDataService } from './song-data.service';
import {SongViewModel} from './models/song.viewModel'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {

  #newTitle: string = ''

  songs: SongViewModel[] = [];
  title = 'Song List';
  constructor(private dataService: SongDataService) { }

  ngOnInit(){
    this.getSongs();
  }

  getSongs(): void {
    this.dataService.getSongs()
      .subscribe(songs => this.songs = songs);
  }

  deleteSong(deleteAction: string): void {
    //Hide locally
    this.songs = this.songs.filter(s => s.deleteAction !== deleteAction)
    this.dataService.deleteSong(deleteAction).subscribe();
  }


  //TODO: Fix this up with some better song creation/hypermedia logic.
  addSong(title: string): void {
    title = title.trim();
    if(!title) { return;}
    // this.dataService.addSong({title, actions: []})
    // .subscribe(newSong =>{
    //   console.debug("Added - " + newSong.title)
    //   this.songs.push(newSong);

    // })
  }

}
