import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-managed-dashboard',
  templateUrl: './managed-dashboard.component.html',
  styleUrls: ['./managed-dashboard.component.scss']
})
export class ManagedDashboardComponent implements OnInit {
  UserName: any = localStorage.getItem('loggedInUserName');
  constructor() { }

  ngOnInit(): void {
  }

}
