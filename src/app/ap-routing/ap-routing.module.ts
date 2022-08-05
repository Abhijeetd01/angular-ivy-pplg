import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GoogleComponent } from '../google/google.component';
import { AmazonComponent } from '../amazon/amazon.component';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from '../login/login.component';
import { LogoutComponentComponent } from '../logout-component/logout-component.component';
import { HomeComponent } from '../home/home.component';
import { ContactComponent } from '../contact/contact.component';



@NgModule({
  imports: [
    CommonModule,
    AmazonComponent,
    GoogleComponent,
    LoginComponent,
    LogoutComponentComponent,
    HomeComponent,
    ContactComponent,
    RouterModule,
  ],
  declarations: []
})
export class ApRoutingModule { }