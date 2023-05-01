import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, from, map, tap } from 'rxjs';

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
