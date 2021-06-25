import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { SongViewModel } from './models/song.viewModel';
import {Song } from './models/song.model'
import { Observable } from 'rxjs';
import { map, catchError, tap } from 'rxjs/operators'
import { SongDataParser } from './songs-data.parser';

@Injectable({providedIn: 'root'})
export class SongDataService {

  //TODO: Remove hardcoding
  private SongListApi= "api/songs";

  httpOptions = {
    headers: new HttpHeaders({'Content-Type': 'application/json'})
  };

  constructor(private httpClient: HttpClient, private songDataParser: SongDataParser) {  }

  public getSongs(): Observable<SongViewModel[]> {
    return this.httpClient.get<Song[]>(this.SongListApi)
    .pipe(map(this.songDataParser.translateSongs))
  }

  public deleteSong(deleteAction: string): Observable<SongViewModel>{
    return this.httpClient.delete<SongViewModel>(deleteAction, this.httpOptions);
  } 
}






//   public addSong(newSong: Song): Observable<Song>{
//    return this.httpClient.post<Song>(this.SongListApi, newSong, this.httpOptions)
//   }
