import { IonicModule } from '@ionic/angular';
import { NgModule, OnInit } from '@angular/core';
import { Tab1Page } from './tab1.page';
import { Tab1PageRoutingModule } from './tab1-routing.module';
import { CommonModule } from '@angular/common';

@NgModule({
  imports: [
    IonicModule,
    Tab1PageRoutingModule,
    CommonModule
  ],
  declarations: [Tab1Page]
})
export class Tab1PageModule implements OnInit {

  constructor(){

  }

  ngOnInit(){

  }
  
}
