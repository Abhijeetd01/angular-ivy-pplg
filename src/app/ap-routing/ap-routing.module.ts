import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { LogoutComponentComponent } from '../logout-component/logout-component.component';
import { HomeComponent } from '../home/home.component';
import { ContactComponent } from '../contact/contact.component';

@NgModule({
  imports: [
    CommonModule,
    LogoutComponentComponent,
    HomeComponent,
    ContactComponent,
    RouterModule,
  ],
  declarations: [],
})
export class ApRoutingModule {}
