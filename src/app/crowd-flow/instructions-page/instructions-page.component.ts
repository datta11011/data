import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-instructions-page',
  templateUrl: './instructions-page.component.html',
  styleUrls: ['./instructions-page.component.scss']
})
export class InstructionsPageComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<InstructionsPageComponent>) { }

  ngOnInit(): void {
  }

  onNoClick(){
    this.dialogRef.close()
  }

}
