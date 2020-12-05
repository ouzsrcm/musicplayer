import { Inject, Injectable } from '@angular/core';
import {InMemoryDbService} from 'angular-in-memory-web-api';

import {File} from './models/File';
import {FileTypes} from './models/FileTypes';

@Injectable({
    providedIn:'root',
})
export class InMemoryDataService implements InMemoryDbService{
    createDb() {
        const files:Array<File> =[
            {   FileName:'ilk_dosya.mp3',
                FileDescription:'İlk Dosya',
                FilePath:'/',
                FileUrl:'//url',
                FileFormat:'audio',
                FileType:'mp3',
                Duration:1,
                Size:1,
                UniqueHash:'f43234a0-40d1-47d0-b05f-b53b3e0806bf'
            },
            {FileName:'ikinci_dosya.mp3',
                FileDescription:'İkinci Dosya',
                FilePath:'/',
                FileUrl:'//url',
                FileFormat:'audio',
                FileType:'mp3',
                Duration:1,
                Size:1,
                UniqueHash:'2286a056-c9fb-49d0-ab20-e343c71354d6'
            }
        ];
        return files;
    }
}