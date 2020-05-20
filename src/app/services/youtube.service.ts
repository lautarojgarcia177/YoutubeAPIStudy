import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class YoutubeService {

  private baseUrl = 'https://www.googleapis.com/youtube/v3';
  //private apikey = 'AIzaSyBFcEPrf92sntbF6m6CL775x-Kry4Hk6iw';
  private apikey = 'AIzaSyDgBUyQla6eHSwlEp2qbYj-gA6j5t953cM';
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    })
  };

  constructor(private http: HttpClient) { }

  public searchInsideChannel(channelId, searchQuery: string) {

    const url = this.baseUrl + '/search';
    const params = new HttpParams()
                    .set('part', 'snippet')
                    .set('maxResults', '10')
                    .set('channelId', channelId)
                    .set('q', searchQuery)
                    .set('type', 'video')
                    .set('key', this.apikey);

    return this.http.get(url, {params})
  }
}
