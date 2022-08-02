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
// import { FlexLayoutModule } from '@angular/flex-layout';
import { AmazonComponent } from './amazon/amazon.component';
import { GoogleComponent } from './google/google.component';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';

const routes: Routes = [
  { path: 'amazon', component: AmazonComponent },
  { path: 'google', component: GoogleComponent },
];

@NgModule({
  imports: [
    BrowserModule,
    MatToolbarModule,
    MatInputModule,
    RouterModule.forRoot(routes),
    BrowserModule,
    RouterModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatSidenavModule,
    MatButtonModule,
    MatIconModule,
    MatDividerModule,
    BrowserModule,
    FormsModule,
    MatIconModule,
    MatButtonModule,
    MatSidenavModule,
    MatToolbarModule,
    BrowserAnimationsModule,
  ],
  declarations: [AppComponent, HelloComponent],
  bootstrap: [AppComponent],
})
export class AppModule {}
