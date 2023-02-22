import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { InstructionsPageComponent } from '../instructions-page/instructions-page.component';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.scss']
})
export class TaskListComponent implements OnInit {

  constructor(private dialog: MatDialog) { }

  ngOnInit(): void {
  }
  InstDialog() {
    const dialogRef = this.dialog.open(InstructionsPageComponent, {
      width: "50%",
      height: "100%",
      position: { right: '0'}
    });

     dialogRef.afterClosed().subscribe((res) => {
      console.log("Dialog Closed", res);
    });
  }

}
