import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
@Component({
  selector: 'app-managed-instructions',
  templateUrl: './managed-instructions.component.html',
  styleUrls: ['./managed-instructions.component.scss']
})
export class ManagedInstructionsComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<ManagedInstructionsComponent>) { }

  ngOnInit(): void {
  }

  onNoClick(){
    this.dialogRef.close()
  }
}
