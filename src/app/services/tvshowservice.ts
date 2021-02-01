import { Injectable } from '@angular/core';
import {
  HttpInterceptor,
  HttpClient,
  HttpParams,
  HttpHeaders,
  HttpRequest,
  HttpResponse,
  HttpHandler,
  HttpEvent,
  HttpErrorResponse,
} from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Observable, BehaviorSubject, throwError, Subject } from 'rxjs';
import { map, catchError, tap } from 'rxjs/operators';
import { Router } from '@angular/router';
import { tvShows } from '../models/shows';

@Injectable({
  providedIn: 'root',
})
export class tvshowService {
  public getshows = new Subject<any>();
  constructor(private http: HttpClient, private router: Router) { }
  tvshowsGet(): Observable<any> {
    return this.http
      .get<tvShows>(`${environment.apiUrl}`)
      .pipe(
        tap(() => {
          this.getshows.next();
        }),
        catchError((error) => {
          return throwError(error);
        }),
      );
  }
}
