import { Component, OnInit } from '@angular/core';
import { SongDataService } from './song-data.service';
import {Song} from './song'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {

  #newTitle: string = ''

  songs: Song[] = [];
  title = 'Song List';
  constructor(private dataService: SongDataService) {

  }

  ngOnInit(){
    this.getSongs();
  }

  getSongs(): void {
    this.dataService.getSongs()
    .subscribe(songs => this.songs = songs);
  }

  addSong(title: string): void {
    title = title.trim();
    if(!title) { return;}
    this.dataService.addSong({title} as Song)
    .subscribe(newSong =>{
      console.debug("Added - " + newSong.title)
      this.songs.push(newSong);

    }
      )
  }

}
