import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lane-alignment-table',
  templateUrl: './lane-alignment-table.component.html',
  styleUrls: ['./lane-alignment-table.component.scss']
})
export class LaneAlignmentTableComponent implements OnInit {
  UserName: any = localStorage.getItem('loggedInUserName');
  constructor() { }

  ngOnInit(): void {
  }

}
