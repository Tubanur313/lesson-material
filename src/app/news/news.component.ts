import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { NewsDialogComponent } from '../news-dialog/news-dialog.component';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.scss']
})
export class NewsComponent implements OnInit {

  arr = [
    {title: "ABC", article: "Lorem ipsum", img_path: "1.jpg"  },
    {title: "BCD", article: "Lorem ipsum", img_path: "2.jpg"  },
    {title: "CDE", article: "Lorem ipsum", img_path: "3.jpg"  },
    {title: "DFG", article: "Lorem ipsum", img_path: "4.jpg"  }
  ];


  constructor(public dialog: MatDialog) {
    console.log(this.arr);
    console.log(this.arr[0].title)
  }

  ngOnInit(): void {
  }

  openDialog(i: number){
    console.log(this.arr[i]);

    let dialogRef = this.dialog.open(NewsDialogComponent, {
      height: '400px',
      width: '600px',
      data: this.arr[i]
    });

  }

}
