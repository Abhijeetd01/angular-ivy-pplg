import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { MatInputModule } from '@angular/material/input';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { MatNativeDateModule } from '@angular/material/core';
import { HttpClientModule } from '@angular/common/http';
import { MatCardModule } from '@angular/material/card';
// import { FlexLayoutModule } from '@angular/flex-layout';
import { AmazonComponent } from './amazon/amazon.component';
import { GoogleComponent } from './google/google.component';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';
import { LoginComponent } from './login/login.component';
import {MatToolbarModule} from '@angular/material/toolbar'; 
import { MatFormFieldModule } from '@angular/material/form-field';

const routes: Routes = [
  { path: 'amazon', component: AmazonComponent },
  { path: 'google', component: GoogleComponent },
  { path: 'login', component: LoginComponent },
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
    MatCardModule,
    MatFormFieldModule,
    MatToolbarModule,
  ],
  declarations: [AppComponent, HelloComponent],
  bootstrap: [AppComponent],
})
export class AppModule {}
