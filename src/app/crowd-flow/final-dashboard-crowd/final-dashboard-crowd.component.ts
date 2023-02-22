import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-final-dashboard-crowd',
  templateUrl: './final-dashboard-crowd.component.html',
  styleUrls: ['./final-dashboard-crowd.component.scss']
})
export class FinalDashboardCrowdComponent implements OnInit {
  UserName: any = localStorage.getItem('loggedInUserName');
  constructor() { }

  ngOnInit(): void {
  }

}
