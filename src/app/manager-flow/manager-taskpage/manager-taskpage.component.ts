import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { AppSettingsService } from 'src/app/services/app.settings.service';
import { CommonApiService } from 'src/app/services/common-api.service';
import { InstructionsPageComponent } from 'src/app/crowd-flow/instructions-page/instructions-page.component';
import { MatDialog } from '@angular/material/dialog';
import {
  Category,
  MIMEType,
  ToolType,
  Lider,
  Paths,
} from 'src/app/services/constant';
import { animate, state, style, transition, trigger } from '@angular/animations';


export interface PeriodicElement {
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
}

const WORKFLOW_DATA: PeriodicElement[] = [];

@Component({
  selector: 'app-manager-taskpage',
  templateUrl: './manager-taskpage.component.html',
  styleUrls: ['./manager-taskpage.component.scss'],
  animations: [
    trigger('detailExpand', [
      state('collapsed', style({ height: '0px', minHeight: '0' })),
      state('expanded', style({ height: '*' })),
      transition('expanded <=> collapsed', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
    ]),
  ],
})
export class ManagerTaskpageComponent implements OnInit {
  displayedColumns: string[] = [
    'taskTitle',
    'taskName',
    'rating',
    'taskDuration',
    'taskCount',
    'action',
  ];
  expandedElement!: PeriodicElement | null;
  columnsToDisplayWithExpand = [...this.displayedColumns, 'expand'];
  dataSource = WORKFLOW_DATA;
  timer: any = null;
  clients = new Array();
  pageData: any;
  totalRecordCount: number = 0;
  taskDetailsByClient: any;
  getType: any;
  taskType: number = 0;
  clientId: number = 0;
  taskName: string = '';
  title: string = '';
  nrSelect: any = 0;
  ctId: any;
  ShowNav = 0;
  arrowupkey: boolean = true;
  serachTitle: string = '';

  constructor(
    private api: CommonApiService,
    private dialog: MatDialog,
    private apiCallService: AppSettingsService
  ) { }
  ngOnInit(): void {
    this.GetBaseKeyValues();
    this.getTaskList();
    this.pageData = this.apiCallService.workflowPageFilter.getValue();
  }

  getTaskList(event?: any) {
    this.serachTitle = event && event.target && event.target.value;
    this.pageData = this.apiCallService.workflowPageFilter.getValue();
    this.pageData.search = this.serachTitle || "";
    this.pageData.type = this.nrSelect;
    clearTimeout(this.timer);
    this.timer = setTimeout(() => {
      this.api.postData(Paths.GetAssignTasks, this.pageData).subscribe((res: any) => {
        const { result, total }: any = res;
        // this.clients = result;
        this.dataSource = result;
        this.totalRecordCount = total || 0;
      });
    }, 300);
  }

  onPaginateChange(event: any, serachTitle: string) {
    this.apiCallService.workflowPageFilter.next(event);
    this.pageData = this.apiCallService.workflowPageFilter.getValue();
    this.pageData.search = serachTitle || '';
    this.api.postData(Paths.GetAssignTasks, this.pageData).subscribe((res: any) => {
      const { result, total }: any = res;
      this.dataSource = result;
      this.totalRecordCount = total || 0;
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
      const { result, total }: any = res;
      this.dataSource = result;
      this.totalRecordCount = total || 0;
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

}
