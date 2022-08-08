import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from '../home/home.component';
import { ContactComponent } from '../contact/contact.component';

@NgModule({
  imports: [
    CommonModule,
    HomeComponent,
    ContactComponent,
    RouterModule,
  ],
  declarations: [],
})
export class ApRoutingModule {}
