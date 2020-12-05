import { Component, NgModule, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { DataService } from '../dataservices/data.service';
import { Files } from '../models/Files';
@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page implements OnInit {
  
  public searchTerm: string = "";
  audioFiles:Files[] = [];
  filteredList:Files[] = [];

  constructor(private dataService: DataService) {}

  ngOnInit(){
    this.dataService.files().subscribe(files=>{
      this.filteredList = this.audioFiles = files;
    });
    
  }

  filter_(event: any) {
    //console.log(event);
    var searchTerm = searchTerm.toLowerCase();
    this.filteredList = this.audioFiles.filter(item => 
      {
        return item.FileName.toLowerCase().indexOf(searchTerm)>-1
      });
  }
}
