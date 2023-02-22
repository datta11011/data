import { Component, OnInit } from '@angular/core';
import { CommonApiService } from 'src/app/services/common-api.service';
import { Paths } from 'src/app/services/constant';

@Component({
  selector: 'app-analytics-progressbar',
  templateUrl: './analytics-progressbar.component.html',
  styleUrls: ['./analytics-progressbar.component.scss']
})
export class AnalyticsProgressbarComponent implements OnInit {

  tasksCount: any;
  activeUsersCount: any;
  assignedUsersCount: any;
  idelUserCount: any;
  taskActiveCount: any;
  taskCompletedCount: any;
  totalTime: any;

  taskActivep: any;
  taskCompletedp: any;
  assignedUsersp: any;
  activeUsersp: any;
  idelUserp: any;

  constructor(private api: CommonApiService) { }

  ngOnInit(): void {

    this.api.getData(`${Paths.GetTasksCount}?month=${2}&year=${2222}`).subscribe((data: any) => {
      this.tasksCount = data.result;
      console.log('tasksCount', this.tasksCount)
      this.taskActiveCount = data.result.taskActiveCount;
      this.taskActivep = Math.floor(this.taskActiveCount / 100 * 100);

      this.taskCompletedCount = data.result.taskCompletedCount;
      this.taskCompletedp = Math.floor(this.taskCompletedCount / 100 * 100);

      this.assignedUsersCount = data.result.assignedUsersCount;
      this.assignedUsersp = Math.floor(this.assignedUsersCount / 100 * 100);

      this.idelUserCount = data.result.idelUserCount;
      this.idelUserp = Math.floor(this.idelUserCount / 100 * 100);

      this.activeUsersCount = data.result.idelUserCount;
      this.activeUsersp = Math.floor(this.activeUsersCount / 100 * 100);

      this.totalTime = data.result.totalTime;

    });

  }

}
