import { Component, NgModule, OnInit } from '@angular/core';
import { DataService } from '../dataservices/data.service';
import { album } from '../models/album';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page implements OnInit {

  files:File[] = [];
  dummies:any[] = [];

  constructor(private dataService: DataService) {}

  ngOnInit(){
    this.dataService.dummyAlbums().subscribe(dummies=>{
      //console.log(dummies);
      this.dummies = dummies;
    });
    this.dataService.files().subscribe(files=>{
      this.files = files;
    });
  }

  filter_(event: any) {
    console.log(event);
  }

}
