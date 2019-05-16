import { Component, OnInit } from '@angular/core';
import { bgOption } from '../app.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  option: number = bgOption;

  constructor() {}

  ngOnInit() {}
}
