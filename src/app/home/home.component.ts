import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { PrimeNGConfig } from 'primeng/api';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  name = 'Angular 13';
  login() {

  }


}