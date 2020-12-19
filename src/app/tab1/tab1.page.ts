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
  Files:Files[] = [];

  constructor(private dataService: DataService) {}

  ngOnInit(){
    this.LoadFiles();
  }

  LoadFiles(){
    this.dataService.files().subscribe(files=>{
      this.Files = files;
    });
  }

  filter_(event: any) {
    if (event.target.value.length < 1)
    {
      this.LoadFiles();
      return;
    }

    requestAnimationFrame(() => {
      this.Files = this.Files.filter((item) => {
        return (item.FileName.toLowerCase().indexOf(event.target.value) >-1);
      });
    });
  }
}