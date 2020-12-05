import { Injectable } from '@angular/core';
import { HttpClient } from  '@angular/common/http';
import { album } from '../models/album';
import { Files } from '../models/Files';

@Injectable({
    providedIn:'root'
})
export class DataService{

    constructor(private http: HttpClient){}

    dummyAlbums(){
        //return this.http.get<album[]>('https://jsonplaceholder.typicode.com/albums');
        return this.http.get<album[]>('/assets/albums.json');
    }

    files(){
        return this.http.get<Files[]>('/assets/files.json');
    }
}