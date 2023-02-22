import { Component, OnInit } from '@angular/core';
import { DialogPosition, MatDialog } from '@angular/material/dialog';
import { AddUserComponent } from 'src/app/admin/add-user/add-user.component';
@Component({
  selector: 'app-manager-user',
  templateUrl: './manager-user.component.html',
  styleUrls: ['./manager-user.component.scss']
})
export class ManagerUserComponent implements OnInit {
  UserName: any = localStorage.getItem('loggedInUserName');
  
  usrDialog() {
    const dialogRef = this.dialog.open(AddUserComponent, {
      width: "30%",
      height: "75%",
    });

     dialogRef.afterClosed().subscribe((res) => {
      console.log("Dialog Closed", res);
    });
  }

  constructor(private dialog: MatDialog,) { }

  ngOnInit(): void {
  }
}
