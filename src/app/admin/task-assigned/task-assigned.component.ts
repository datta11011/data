import { ApiCallService } from './../../services/api-call.service';
import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { CommonApiService } from 'src/app/services/common-api.service';
import { Paths } from 'src/app/services/constant';

@Component({
  selector: 'app-task-assigned',
  templateUrl: './task-assigned.component.html',
  styleUrls: ['./task-assigned.component.scss']
})
export class TaskAssignedComponent  implements OnInit {
  title : any;
  taskId : any;
  id : any;
  getData: any;

  constructor(
    public dialogRef: MatDialogRef<TaskAssignedComponent>,
    private api: CommonApiService,
    @Inject(MAT_DIALOG_DATA) public data: any  ){   }


  ngOnInit(): void {
    this.getTask();
  }

  getTask(){
    this.api.getData(`${Paths.GetTask}?taskId=${this.data}`).subscribe((data: any) => {
      if(data) {
        this.getData = data.result;
        this.title = this.getData.title;
      }
    });
  }


  onNoClick() {
    this.dialogRef.close();
  }

}
