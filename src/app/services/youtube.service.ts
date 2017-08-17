import { Injectable } from '@angular/core';
import { Http, URLSearchParams } from '@angular/http';
import 'rxjs/Rx';

@Injectable()
export class YoutubeService {
  private idCanal: string = 'UCOeBaNCSMUbhqyuuLx-Eskg';
  private idListaVideos: string = 'UUOeBaNCSMUbhqyuuLx-Eskg';
  private apikeyuotube: string = 'AIzaSyA9YEURgUFM4TITc18VfXmQJVKR0RhPdUk';
  private urlVideosCanal: string = 'https://www.googleapis.com/youtube/v3/playlistItems';
  private nextPageToken: string = '';

  constructor(public _http: Http) { }

  cargarLista() {
    let parametros = new URLSearchParams();
    parametros.set('part', 'snippet');
    parametros.set('maxResults', '10');
    parametros.set('playlistId', this.idListaVideos);
    parametros.set('key', this.apikeyuotube);

    if (this.nextPageToken) {
      parametros.set('pageToken', this.nextPageToken);
    }

    let url = `${this.urlVideosCanal}`;
    return this._http.get(url, { search: parametros }).map(resp => {
      console.log(resp.json());
      this.nextPageToken = resp.json().nextPageToken;
      let videos: any[] = [];
      for (let video of resp.json().items) {
        let videoSnippet = video.snippet;
        videos.push(videoSnippet);
      }
      return videos;
    })
  }

}
