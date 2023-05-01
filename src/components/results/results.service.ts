import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, from, map, tap } from 'rxjs';

export interface IHits {
  id: string,
  pageURL: string,
  type: string,
  tags: string,
  previewURL: string,
  previewWidth: number,
  previewHeight: number,
  webformatURL: string,
  webformatHeight: number,
  webformatWidth: number,
  largeImageURL: string,
  imageWidth: number,
  imageHeight: number,
  imageSize: string,
  views: number,
  downloads: number,
  collections: string,
  likes: number,
  comments: number,
  user_id: string,
  user: string,
  userImageURL: string,
}

@Injectable({
  providedIn: 'root'
})
export class ResultsService {

  constructor(private http: HttpClient) { }

  makeImageRequest(query: string): Observable<any> {
    return this.http.get(query).pipe(
      tap(console.log), //TODO: dev only remove in prod
      map((res) => res)
    )
  }
}
