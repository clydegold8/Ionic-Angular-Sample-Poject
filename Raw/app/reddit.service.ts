import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RedditService {

public configUrl = 'https://www.reddit.com/subreddits/popular.json?limit=20';

  constructor(private http: HttpClient) { }

  // access the Reddit API
  getConfig(): Observable<HttpResponse<any>>  {
    return this.http.get<any>(this.configUrl, {observe: 'response'});
  }

}
