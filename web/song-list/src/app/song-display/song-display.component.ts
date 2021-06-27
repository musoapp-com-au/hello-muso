import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { SongUpdateRequest } from '../models/song.model';
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
  @Output() editCompleted = new EventEmitter<SongUpdateRequest>();

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
    if(newTitle !== oldTitle)
    {
      this.song.title = newTitle;
      const songUpdateRequest: SongUpdateRequest = {
        updateAction: this.song.editAction,
        updateData: {
          oldTitle: oldTitle,
          newTitle: newTitle
        }

      }
      this.editCompleted.emit(songUpdateRequest)
    }
    this.isEditing = false;
  }
}
