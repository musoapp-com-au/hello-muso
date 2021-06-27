import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { AppComponent } from './app.component';
import { environment } from 'src/environments/environment';
import { ApiClientInterceptor } from './apiProvider/api.interceptor';
import { SongDisplayComponent } from './song-display/song-display.component';

@NgModule({
  declarations: [
    AppComponent,
    SongDisplayComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: ApiClientInterceptor, multi: true },
    { provide: "BASE_API_URL", useValue: environment.apiUrl},
    { provide: "API_ENTRY", useValue: environment.apiEntry} 
  ],
    bootstrap: [AppComponent]
})
export class AppModule { }
