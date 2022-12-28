import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mat-elements',
  templateUrl: './mat-elements.component.html',
  styleUrls: ['./mat-elements.component.scss']
})
export class MatElementsComponent implements OnInit {
  longText = "Hello world";
  type = "bold";

  constructor() { }

  ngOnInit(): void {
  }

  onValChange(value: any) {
    this.type = value;
    console.log(value)
  }

}
