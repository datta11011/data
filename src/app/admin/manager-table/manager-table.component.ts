import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-manager-table',
  templateUrl: './manager-table.component.html',
  styleUrls: ['./manager-table.component.scss']
})
export class ManagerTableComponent implements OnInit {
  UserName: any = localStorage.getItem('loggedInUserName');
  constructor() { }

  ngOnInit(): void {
  }

}
