import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Song } from './song';
import { Observable } from 'rxjs';

@Injectable({providedIn: 'root'})
export class SongDataService {

  //TODO: Remove hardcoding
  private SongListApi= "http://localhost:3000/api/songs";

  httpOptions = {
    headers: new HttpHeaders({'Content-Type': 'application/json'})
  };

  constructor(private httpClient: HttpClient) { }

  public getSongs(): Observable<Song[]> {
    return this.httpClient.get<Song[]>(this.SongListApi)
  }
}
