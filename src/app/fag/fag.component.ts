import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-fag',
  templateUrl: './fag.component.html',
  styleUrls: ['./fag.component.scss']
})
export class FagComponent implements OnInit {
  panelOpenState = false;
  constructor() { }

  ngOnInit(): void {
  }

}
