import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-manager-dashboard',
  templateUrl: './manager-dashboard.component.html',
  styleUrls: ['./manager-dashboard.component.scss']
})
export class ManagerDashboardComponent implements OnInit {
  UserName: any = localStorage.getItem('loggedInUserName');
  constructor() { }

  ngOnInit(): void {
  }

}
