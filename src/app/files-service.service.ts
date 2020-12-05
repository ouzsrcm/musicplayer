import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Observable, of} from 'rxjs';
import { catchError, map, tap} from 'rxjs/operators';

import { File } from './models/File';

@Injectable({
  providedIn: 'root'
})
export class FilesServiceService {
  private fetchUrl = 'api/get';
  httpOptions={
    headers:new HttpHeaders({'Content-Type': 'application/json'})
  };
  constructor(private http:HttpClient ) { }

  getFiles():Observable<File[]>{
    return this.http.get<File[]>(this.fetchUrl)
    .pipe(
      tap(_ => this.log('fetched files')),
      catchError(this.handleError<File[]>('getFiles', []))
    );
  }

  private handleError<T>(operation='operation', result?: T){
    return (error: any): Observable<T> =>{
      console.error(error);
      this.log(`${operation} failed: ${error.message}`);

      return of(result as T);
    };
  }

  private log(message: string){
    //TODO:
  }
} 