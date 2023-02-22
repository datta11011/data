import { Component, OnInit } from '@angular/core';
import { CommonApiService } from 'src/app/services/common-api.service';
import { Paths } from 'src/app/services/constant';

interface ProgramsResp {
  assignedTask: number;
  totalTask: number;
  unAssignedTask: number;
}

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {


  showFooter = false;
  UserName: any = localStorage.getItem('loggedInUserName');
  programsData: ProgramsResp;
  constructor(public api: CommonApiService) { }

  ngOnInit(): void {
    this.GetTasksStatus();
  }

  GetTasksStatus() {
    this.api.getData(Paths.GetTasksStatus).subscribe((res: any) => {
      const { result } = res;
      if (result) {
        this.programsData = result;
      }
    })
  }

  getPieStyle() {
    return `background: radial-gradient(white 65%, transparent 27%),
      conic-gradient(#F7931E 0% ${this.programsData.unAssignedTask}%, #1BA0F2 ${this.programsData.unAssignedTask}% 100%)`;
  }

}
