import { Component, Input, OnInit } from '@angular/core';
import { SongViewModel } from '../models/song.viewModel';

@Component({
  selector: 'app-song-display',
  templateUrl: './song-display.component.html',
  styleUrls: ['./song-display.component.css']
})
export class SongDisplayComponent implements OnInit {

  @Input()song: SongViewModel;

  constructor() { 
  }

  ngOnInit(): void {
  }

}
