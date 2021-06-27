import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { SongListViewModel, SongViewModel } from './models/song.viewModel';
import {Song, SongList, SongUpdateData } from './models/song.model'
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators'
import { SongDataParser } from './songs-data.parser';

@Injectable({providedIn: 'root'})
export class SongDataService {

  httpOptions = {
    headers: new HttpHeaders({'Content-Type': 'application/json'})
  };

  constructor(private httpClient: HttpClient, 
      private songDataParser: SongDataParser,
      @Inject('API_ENTRY') private songListApi: string) {  }

  public getSongs(): Observable<SongListViewModel> {
    return this.httpClient.get<SongList>(this.songListApi)
    .pipe(map(this.songDataParser.translateSongs))
  }

  public deleteSong(deleteAction: string): Observable<SongViewModel>{
    return this.httpClient.delete<SongViewModel>(deleteAction, this.httpOptions);
  } 

  public updateSong(editAction: string, updateData: SongUpdateData): Observable<SongViewModel>{
    return this.httpClient.put<Song>(editAction, updateData, this.httpOptions)
      .pipe(map(this.songDataParser.translateSong));
  }


  public addSong(createAction: string, title: string): Observable<SongViewModel>{
    return this.httpClient.post<Song>(createAction, {title}, this.httpOptions)
      .pipe(map(this.songDataParser.translateSong));
  }
}
