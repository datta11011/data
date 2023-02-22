import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ManagedInstructionsComponent } from '../managed-instructions/managed-instructions.component';
import { ActivatedRoute } from '@angular/router';
import { InstructionsPageComponent } from 'src/app/crowd-flow/instructions-page/instructions-page.component';
import { AppSettingsService } from 'src/app/services/app.settings.service';
import { CommonApiService } from 'src/app/services/common-api.service';
import { Category, MIMEType, ToolType, Lider, Paths } from 'src/app/services/constant';
import { ClientWorkflowComponent } from 'src/app/admin/client-workflow/client-workflow.component';


export interface PeriodicElement {
[x: string]: any;
  
  id: number;
  createdBy: string;
  createdOn: string;
  lastUpdateBy: string;
  lastUpdateOn: string;
  activeInd: boolean;
  action: number;
  resultStatus: number;
  program: any;
  imageUrl: string;
  title: string;
  rating: number;
  taskDuration: number;
  countOfTaskUploads: number;
  taskType: string;
  taskName: String;
  description:string;
}

const WORKFLOW_DATA: PeriodicElement[] = [];

@Component({
  selector: 'app-managed-taskpage',
  templateUrl: './managed-taskpage.component.html',
  styleUrls: ['./managed-taskpage.component.scss']
  
})

export class ManagedTaskpageComponent implements OnInit {
  ctId: any;
  ShowNav = 0;
  expandedElement!: PeriodicElement | null;
  arrowupkey: boolean = true;
  getType: any;
  assigntasks: any;
  taskType: number = 0;
  clientId: number = 0;
  Clients: any;
  clientDetails: any;
  nrSelect = 0;
  taskName: string = '';
  timer: any = null;
  pageData: any;
  dataSource = WORKFLOW_DATA;
  totalRecordCount: number = 0;
  public show:boolean = false;
  public up:boolean = true;
  public buttonName:any = 'Show';
  serachTitle: string = '';
displayedColumns: any;
  

  constructor(private dialog: MatDialog, private api: CommonApiService,
    private apiCallService: AppSettingsService,
    private route: ActivatedRoute) {
    this.route.paramMap.subscribe(params => {
      this.ngOnInit();
      if (params.has('clientId')) {
        this.clientId = parseInt(params.get('clientId') || '');
        // this.getSingleClient(this.clientId);
        this.getTaskList();
        
      }
      // console.log("params",params);
    });
  }

  ngOnInit(): void {
    this.GetBaseKeyValues();
    this.getTaskList();
    this.GetAssignTask()
    // this.pageData = this.apiCallService.workflowPageFilter.getValue();
  }

  getTaskList(event?: any) {
    this.serachTitle = event && event.target && event.target.value;
    this.pageData = this.apiCallService.workflowPageFilter.getValue();
    this.pageData.search = this.serachTitle || "";
    this.pageData.type = this.nrSelect;
    clearTimeout(this.timer);
    this.timer = setTimeout(() => {
      this.api.postData(Paths.GetAssignTasks, this.pageData).subscribe((res: any) => {
        // this.clients = result;
        this.dataSource = res.result;
      this.totalRecordCount = res.total || 0;
      });
    }, 300);
  }

  onPaginateChange(event: any, serachTitle: string) {
    this.apiCallService.workflowPageFilter.next(event);
    this.pageData = this.apiCallService.workflowPageFilter.getValue();
    this.pageData.search = serachTitle || '';
    this.api.postData(Paths.GetAssignTasks, this.pageData).subscribe((res: any) => {
      this.dataSource = res.result;
      this.totalRecordCount = res.total || 0;
    });
  }

  InstDialog() {
    const dialogRef = this.dialog.open(InstructionsPageComponent, {
      width: '50%',
      height: '100%',
      position: { right: '0' },
    });
    dialogRef.afterClosed().subscribe((res) => {
      // console.log("Dialog Closed", res);
    });
  }

  GetBaseKeyValues() {
    this.api
      .getData(`${Paths.GetBaseKeyValues}?baseKeyId=${MIMEType}`)
      .subscribe((res) => {
        this.getType = res;
        // console.log('Type', res);
      });
  }

  GetAssignTask() {
    this.api.postData(Paths.GetAssignTasks, this.pageData).subscribe((res: any) => {
      console.log(res.result);
      this.dataSource = res.result;
      this.totalRecordCount = res.total || 0;
    
    });
  }

  updateTaskType(taskType: number, serachTitle: string) {
    this.pageData = this.apiCallService.workflowPageFilter.getValue();
    this.pageData.type = taskType;
    this.pageData.search = this.serachTitle;
    this.GetAssignTask();
  }

  showWorkflow(id: number, element: PeriodicElement) {
    this.expandedElement = this.expandedElement === element ? null : element;
    this.ctId = id;
    this.ShowNav = this.ctId;
    if (this.expandedElement) {

    }
  }

  toggleup() {    
    this.show = !this.show;
    this.up = !this.up;
    if(this.show)  
      this.buttonName = "Hide";
    else(this.up)
      this.buttonName = "Show";
  }
  toggledown() {
    this.show = !this.show;
    this.up = !this.up;
    if(this.show)  
      this.buttonName = "Show";
    else(this.up)
      this.buttonName = "Hide";
  }

}
