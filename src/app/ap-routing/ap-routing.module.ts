import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GoogleComponent } from '../google/google.component';
import { AmazonComponent } from '../amazon/amazon.component';
import { RouterModule, Routes } from '@angular/router';



@NgModule({
  imports: [
    CommonModule,
    AmazonComponent,
    GoogleComponent,
    RouterModule,
  ],
  declarations: []
})
export class ApRoutingModule { }