import { Component } from '@angular/core';
import { CommonApiService } from 'src/app/services/common-api.service';
import { SharedService } from 'src/app/services/sharedService.service';
import { Paths } from 'src/app/services/constant';
import { UploadTask } from '../../models/uploadtask';
import { ActivatedRoute } from '@angular/router'
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-managed-uploadtask',
  templateUrl: './managed-uploadtask.component.html',
  styleUrls: ['./managed-uploadtask.component.scss']
})
export class ManagedUploadtaskComponent {
  taskimages = new Array();
  constructor(
    private api: CommonApiService,
    private dialog: MatDialog,
    private sharedService: SharedService,
    private route: ActivatedRoute,
    private shareService: SharedService,
    
  ) { }

  gettask(id: any) {
    this.api.getData(`${Paths.GetTask}?taskId=${id}`).subscribe((data: any) => {
      data = data.result;
      console.log('getTask', data);
    })
  }
}
