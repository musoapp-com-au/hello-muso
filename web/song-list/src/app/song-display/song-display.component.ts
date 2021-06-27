import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { SongViewModel } from '../models/song.viewModel';

@Component({
  selector: 'app-song-display',
  templateUrl: './song-display.component.html',
  styleUrls: ['./song-display.component.css']
})
export class SongDisplayComponent implements OnInit {

  #newTitle: string;

  @Input()song: SongViewModel;

  @Output() deleteRequested = new EventEmitter<string>();
  // @Output() editCompleted = new EventEmitter<string>();

  isEditing: boolean;

  constructor() { 
    this.isEditing = false;
  }

  ngOnInit(): void {}

  deleteSong(deleteAction: string): void {
    this.deleteRequested.emit(deleteAction);
  }

  enterEditMode(): void { 
    this.isEditing = true;
  }

  completeUpdate(oldTitle: string, newTitle: string): void {
    console.log(oldTitle);
    console.log(newTitle);
  }

}
