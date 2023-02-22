import { Component, OnInit, ViewChild} from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute } from '@angular/router';
import { InstructionsPageComponent } from 'src/app/crowd-flow/instructions-page/instructions-page.component';
import { CommonApiService } from 'src/app/services/common-api.service';
import { Category, MIMEType, ToolType, Lider } from 'src/app/services/constant';
import { TaskAssignedComponent } from '../task-assigned/task-assigned.component';
import { animate, state, style, transition, trigger } from '@angular/animations';
import { AppSettingsService } from 'src/app/services/app.settings.service';
import { Paths } from 'src/app/services/constant';

export interface PeriodicElement  {
  id: number,
  createdBy: string,
  createdOn: string,
  lastUpdateBy: string,
  lastUpdateOn: string,
  activeInd: boolean,
  action: number,
  resultStatus: number,
  program: any,
  imageUrl: string,
  title: string,
  rating: number,
  taskDuration: number,
  countOfTask: number,
  taskType : string
}

const ELEMENT_DATA: PeriodicElement [] = [
];
@Component({
  selector: 'app-autonomous-vehicle',
  templateUrl: './autonomous-vehicle.component.html',
  styleUrls: ['./autonomous-vehicle.component.scss'],
  animations: [
    trigger('detailExpand', [
      state('collapsed', style({height: '0px', minHeight: '0'})),
      state('expanded', style({height: '*'})),
      transition('expanded <=> collapsed', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
    ]),
  ],
})
export class AutonomousVehicleComponent implements OnInit {
  arrowupkey: boolean = true;
  getType: any;
  taskDetailsByClient: any;
  taskType: number = 0;
  clientId: number = 0;
  Clients: any;
  clientDetails: any;
  nrSelect = 0;
  taskName: string = '';
  timer: any = null;
  ctId: any;
  ShowNav = 0;
  pageData: any;
  totalRecordCount: number = 0;
  serachTitle: string = '';


  displayedColumns: string[] = ['taskTitle', 'taskType', 'rating', 'taskDuration', 'taskCount', 'action'];
  dataSource : any = [];
  expandedElement!: PeriodicElement  | null;
  columnsToDisplayWithExpand = [...this.displayedColumns, 'expand'];



  constructor(
    private dialog: MatDialog,
    private api: CommonApiService,
    private route: ActivatedRoute,
    private apiCallService: AppSettingsService,
    ) {
    this.route.paramMap.subscribe(params => {
      // this.ngOnInit();
      if (params.has('clientId')) {
        this.clientId = parseInt(params.get('clientId') || '');
        this.getSingleClient(this.clientId);
        this.getTaskDetailsByClient(this.clientId, this.taskType, this.taskName);
      }
      // console.log("params",params);
    });
  }

  ngOnInit(): void {
    this.GetBaseKeys();
    this.GetBaseKeyValues();
    this.pageData = this.apiCallService.workflowPageFilter.getValue();
    this.getTaskDetailsByClient(this.clientId, this.taskType,this.taskName);
    this.getTasks();
  }
  GetBaseKeys() {
    this.api.getData(Paths.GetBaseKeys).subscribe((response) => {
      // console.log('basekeys', response);
    });
  }
  GetBaseKeyValues() {
    this.api.getData(`${Paths.GetBaseKeyValues}?baseKeyId=${MIMEType}`).subscribe((res) => {
      this.getType = res;
      // console.log('Type', res);
    });
  }

  getTaskDetailsByClient(clientId: number, taskType: number, taskName: string) {
    this.pageData = this.apiCallService.workflowPageFilter.getValue();
    clearTimeout(this.timer);
    this.timer = setTimeout(() => {
      this.api.postData(`${Paths.GetTaskDetailsByClient}?ClientId=${this.clientId}`,this.pageData).subscribe((res: any) => {
        const {result, total }: any = res;
        this.taskDetailsByClient = res;
        this.dataSource = result;
        this.totalRecordCount = total || 0;
      });
    }, 400);
  }

  updateTaskType( taskType: number,  searchTitle: string) {
    this.pageData = this.apiCallService.workflowPageFilter.getValue();
    this.pageData.type = taskType;
    this.pageData.search =  this.serachTitle;
    this.getTaskDetailsByClient(this.clientId, this.taskType,this.taskName);
  }

  getSingleClient(id: number) {
    this.api.getData(`${Paths.GetClient}?clientId=${id}`).subscribe((res) => {
      this.clientDetails = res;
    });
  }
  InstDialog() {
    const dialogRef = this.dialog.open(InstructionsPageComponent, {
      width: "50%",
      height: "100%",
      position: { right: '0' }
    });
    dialogRef.afterClosed().subscribe((res) => {
    });
  }

  toggleDown(id: any) {
    this.taskDetailsByClient.result.forEach((element: any) => {
      if (element.id == id) {
        element.collapse = true;
      }
    });
  }

  toggleUp(id: any) {
    this.taskDetailsByClient.result.forEach((element: any) => {
      if (element.id == id) {
        element.collapse = false;
      }
    });
  }

  getTasks(event?: any) {
    this.serachTitle = event && event.target && event.target.value;
    if(!this.serachTitle) return;
    this.pageData = this.apiCallService.workflowPageFilter.getValue();
    this.pageData.search =  this.serachTitle || "";
    this.pageData.type = this.nrSelect;
    clearTimeout(this.timer);
    this.timer = setTimeout(() => {
      this.api.postData(`${Paths.GetTaskDetailsByClient}?ClientId=${this.clientId}`,this.pageData).subscribe((res: any) => {
        this.dataSource = res.result;

      });
    }, 400);
  }

  openDialogAssignTask(id: any) {
    const dialogRef = this.dialog.open(TaskAssignedComponent, {
      data : id,
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }

  showWorkflow(id: number, element: PeriodicElement) {
    this.expandedElement = this.expandedElement === element ? null : element;
    this.ctId = id;
    this.ShowNav = this.ctId;
    if (this.expandedElement) {

    }
  }
  onPaginateChange(event: any) {
    this.apiCallService.workflowPageFilter.next(event);
    this.getTaskDetailsByClient(this.clientId, this.taskType,this.taskName);
  }

}
