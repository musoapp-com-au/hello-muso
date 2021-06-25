import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { SongListViewModel, SongViewModel } from './models/song.viewModel';
import {SongList } from './models/song.model'
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators'
import { SongDataParser } from './songs-data.parser';

@Injectable({providedIn: 'root'})
export class SongDataService {

  //TODO: Remove hardcoding
  private SongListApi= "api/songs";

  httpOptions = {
    headers: new HttpHeaders({'Content-Type': 'application/json'})
  };

  constructor(private httpClient: HttpClient, private songDataParser: SongDataParser) {  }

  public getSongs(): Observable<SongListViewModel> {
    return this.httpClient.get<SongList>(this.SongListApi)
    .pipe(map(this.songDataParser.translateSongs))
  }

  public deleteSong(deleteAction: string): Observable<SongViewModel>{
    return this.httpClient.delete<SongViewModel>(deleteAction, this.httpOptions);
  } 


  public addSong(createAction: string): Observable<SongViewModel>{
    // TODO: Populate creation object
    // TODO: Transform returned object.
    return this.httpClient.post(createAction, {title: "New Song"}, this.httpOptions)
      .pipe(map( x => {return {
        title: "a song",
        canDelete: true,
        deleteAction: ""
      }as SongViewModel }))
  }
}