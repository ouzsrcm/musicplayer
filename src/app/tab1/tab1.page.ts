import { Component, OnInit, ViewChild } from '@angular/core';
import { DataService } from '../dataservices/data.service';
import { Files } from '../models/Files';
import { Howl } from 'howler';
import { IonRange, PopoverController } from '@ionic/angular';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page implements OnInit {
  
  public searchTerm: string = "";
  Files:Files[] = [];

  progress  = 0;
  isplaying = false;
  player:Howl = null;
  activeFile:Files = null;
  @ViewChild('range', {static:false})range: IonRange;

  constructor(private dataService: DataService, public popoverController: PopoverController) {

  }

  async popover(event: any){
    // const popover = await this.popoverController.create({
    //   component: PopoverComponent
    // });
  }

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

  start(file: Files){
    if(this.player){
      this.player.stop();
    }
    this.player = new Howl({
      src:[file.FileUrl],
      html5:true,
      onplay:()=>{
        this.isplaying=true;
        this.activeFile=file;
        this.updateProgress();
      },
      onend:()=>{
        this.isplaying=false;
        this.activeFile=null;
      }
    });
     this.player.play();
  }

  togglePlayer(pause){
    if(this.player==null)
    {
      this.isplaying=false;
      return;
    }
    this.isplaying = !pause;
    if(pause)
    {
      this.player.pause();
    }else{
      this.player.play();
    }
  }

  next(){
    let index = this.Files.indexOf(this.activeFile);
    if(index != this.Files.length-1){
      this.start(this.Files[index+1]);
    } else {
      this.start(this.Files[0]);
    }
  }

  prev(){
    let index = this.Files.indexOf(this.activeFile);
    if(index > 0){
      this.start(this.Files[index-1]);
    } else 
    {
      this.start(this.Files[this.Files.length -1]);
    }
  }

  seek(){
    let val = +this.range.value;
    let dur = this.player.duration();
    this.player.seek(dur * (val / 100));
  }

  updateProgress(){
    let seek = this.player.seek();
    this.progress = (seek / this.player.duration()) * 100 || 0;
    setTimeout(()=> {
      this.updateProgress();
    }, 500);
  }
}