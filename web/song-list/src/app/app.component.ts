import { Component, OnInit } from '@angular/core';
import { SongDataService } from './song-data.service';
import {Song} from './song'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {

  songs: Song[] = [];
  title = 'Song List';
  constructor(private dataService: SongDataService) {

  }

  ngOnInit(){
    
    this.dataService.getSongs().subscribe((data: Song[]) => {
      console.log(`Received ${data.length} songs`);
      this.songs = data;
    } );
  }

}
