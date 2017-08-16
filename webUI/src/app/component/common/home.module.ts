import { NgModule }       from '@angular/core';
import { CommonModule }   from '@angular/common';
import {HomeRoutingModule} from "./home-routing.module";
import {RootComponent} from "../root/root.component";

@NgModule({
  imports: [
    CommonModule,
    HomeRoutingModule
  ],
  declarations: [
    RootComponent
  ]
})
export class HomeModule {}
