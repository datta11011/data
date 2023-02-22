import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-manager-finaldashboard',
  templateUrl: './manager-finaldashboard.component.html',
  styleUrls: ['./manager-finaldashboard.component.scss']
})
export class ManagerFinaldashboardComponent implements OnInit {
  UserName: any = localStorage.getItem('loggedInUserName');
  constructor() { }

  ngOnInit(): void {
  }

}
