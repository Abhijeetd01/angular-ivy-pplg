import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { MatToolbarModule } from '@angular/material/toolbar';
import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { MatInputModule } from '@angular/material/input';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatNativeDateModule } from '@angular/material/core';
import { HttpClientModule } from '@angular/common/http';
import { AmazonComponent } from './amazon/amazon.component';
import { GoogleComponent } from './google/google.component';

const routes: Routes = [
  { path: 'amazon', component: AmazonComponent },
  { path: 'google', component: GoogleComponent },
];


@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    MatToolbarModule,
    MatInputModule,
    RouterModule.forRoot(routes),
    BrowserAnimationsModule,
  ],
  declarations: [AppComponent, HelloComponent],
  bootstrap: [AppComponent],
})
export class AppModule {}
