import { Component, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Inject } from '@angular/core';
import { CommonApiService } from 'src/app/services/common-api.service';
import { Paths } from 'src/app/services/constant';
import { SharedService } from 'src/app/services/sharedService.service';

@Component({
  selector: 'app-assign-task',
  templateUrl: './assign-task.component.html',
  styleUrls: ['./assign-task.component.scss']
})
export class AssignTaskComponent implements OnInit {

  firstName: any;
  person: any;
  selId = 0;
  persons: any;
  task: any;
  tasks: any;
  taskDetails: any = [];
  timer: any = null;
  checkedTask: Set<number> = new Set();
  selectedTaskData: any = [];
  personId: number;
  UserId: any;




  constructor(public dialogRef: MatDialogRef<AssignTaskComponent>,
    private api: CommonApiService,
    private sharedService: SharedService,
    @Inject(MAT_DIALOG_DATA) public data: any) {

  }

  ngOnInit(): void {
    this.persons = this.data;
    console.log(this.data);
    this.personId = this.persons[0].id;
    this.UserId = this.persons[0].user.id;
    this.getTaskDetails();
    this.tasks = this.data;

  }


  constructData(selectedPersonId: number, taskId: number, programId: number) {
    const taskAssigned = localStorage.getItem('LoggedInPersonId') || '0';
    return {
      id: 0,
      createdBy: localStorage.getItem('LoggedInPersonId'),
      createdOn: new Date().toISOString(),
      updatedBy: localStorage.getItem('LoggedInPersonId'),
      updatedOn: new Date().toISOString(),
      activeInd: true,
      resultStatus: 0,
      action: 0,
      taskAssigned: parseInt(taskAssigned),
      taskId: taskId,
      taskAssignedTo: this.personId,
      programId: programId,
      statusId: 0
    }
  }

  handleCheckboxCheck(id: number, data: any): void {
    if (this.checkedTask.has(data.id)) {
      this.checkedTask.delete(data.id);
      let index = this.selectedTaskData.findIndex((el: any) => el.id === data.id);
      this.selectedTaskData.splice(index, 1);
    } else {
      this.checkedTask.add(data.id);
      this.selectedTaskData.push(this.constructData(id, data.id, data.programId))
    }
  }

  getTaskDetails() {
    this.api.getData(`${Paths.GetClientTask}?personid=${this.personId}`).subscribe((data: any) => {
      this.task = data.result;
      console.log(this.task);
      // this.task.forEach((x:any) => {
      //   if(x.id == this.data[0].id) {
      //     this.taskDetails = [x];
      //     console.log(this.taskDetails);
      //   }
      // })
    })
  }

  assignToUser() {
    clearTimeout(this.timer);
    setTimeout(() => {
      this.api.postData(Paths.AddAssignTask, [...this.selectedTaskData]).subscribe((res: any) => {
        if (res) {
          this.api.getData(`${Paths.UpdateUserStatusActive}?userId=${this.UserId}`).subscribe((userdata: any) => {
          })
          this.sharedService.showToast("Assign Task Successfully");
        }
        this.dialogRef.close('save');
      })
    }, 600);
  }

  checkClient(id: number) {
    if (this.checkedTask.has(id)) {
      this.checkedTask.delete(id);
    } else {
      this.checkedTask.add(id);
    }
  }


  onNoClick() {
    this.dialogRef.close();
  }

}
