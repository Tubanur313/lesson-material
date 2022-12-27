import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  longText = "Hello world";
  type = "bold";
  panelOpenState = false;
  constructor() { }

  ngOnInit(): void {
  }

  onValChange(value: any) {
    this.type = value;
    console.log(value)
  }

}
