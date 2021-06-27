import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { SongViewModel } from '../models/song.viewModel';

@Component({
  selector: 'app-song-display',
  templateUrl: './song-display.component.html',
  styleUrls: ['./song-display.component.css']
})
export class SongDisplayComponent implements OnInit {

  @Input()song: SongViewModel;

  @Output() deleteRequested = new EventEmitter<string>();

  constructor() { 
  }

  ngOnInit(): void {
  }

  deleteSong(deleteAction: string): void {
    this.deleteRequested.emit(deleteAction);
  }

}
