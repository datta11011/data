import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { CommonApiService } from 'src/app/services/common-api.service';
import { CreateClientComponent } from 'src/app/shared/cards/create-client/create-client.component';
import { EditClientComponent } from '../edit-client/edit-client.component';
import { ManageClientComponent } from '../manage-client/manage-client.component';
import { TaskProgramComponent } from '../task-program/task-program.component';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { idToken } from '@angular/fire/auth';
import { AppSettingsService } from 'src/app/services/app.settings.service';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import {
  animate,
  state,
  style,
  transition,
  trigger,
} from '@angular/animations';
import { Paths } from 'src/app/services/constant';
import { SharedService } from 'src/app/services/sharedService.service';
import { ApiCallService } from 'src/app/services/api-call.service';
import { ConfirmPopupComponent, ConfirmPopupProps } from 'src/app/shared/confirm-popup/confirm-popup.component';
import { ShareulComponent } from '../shareul/shareul.component';

export interface PeriodicElement {
  action: number;
  activeInd: boolean;
  countOfCrowd: number;
  countOfManaged: number;
  countOfTask: number;
  createdBy: string;
  createdOn: string;
  id: number;
  ponumber: string;
  programsDetails: string;
  resultStatus: number;
  updatedBy: string;
  updatedOn: string;
}

let WORKFLOW_DATA: PeriodicElement[] = [];

@Component({
  selector: 'app-client-workflow',
  templateUrl: './client-workflow.component.html',
  styleUrls: ['./client-workflow.component.scss'],
  animations: [
    trigger('detailExpand', [
      state(
        'collapsed',
        style({ height: '0px', minHeight: '0', display: 'none' })
      ),
      state('expanded', style({ height: '*' })),
      // transition('expanded <=> collapsed', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
    ]),
  ],
})
export class ClientWorkflowComponent implements OnInit, AfterViewInit {
  cId: any;
  ctId: any;
  pId: any;
  dataSource = new MatTableDataSource(WORKFLOW_DATA);
  clients = new Array();
  Clientname: any;
  programsByClient = new Array();
  TaskDetailsByClient = new Array();
  AddContactForm!: FormGroup;
  dialogRef: any;
  clientContacts = new Array();
  checkboxs: any = [];
  clientsname = new Array();
  inviteData = new Array();
  isUpdate: Boolean = false;
  private saveUsername: boolean = true;
  private autoLogin: boolean = true;
  courselist: any;
  _student: any;
  public isselected: string | undefined;
  checkedClients: Set<number> = new Set();
  displayVal: string = '';
  custId: any;
  ShowNav = 0;
  showicon = 0;
  ShowTNav = 0;
  showTicon = 0;
  totalRecordCount: number = 0;
  pageData: any;
  timer: any = null;
  selCustId: any = 0;
  disabledAgreement: boolean = true;

  @ViewChild('closebutton') closebutton: any;

  constructor(
    private router: Router,
    private dialog: MatDialog,
    private api: CommonApiService,
    private appSetting: AppSettingsService,
    private apiCallService: ApiCallService,
    private sharedService: SharedService
  ) {
    const selectedProgramId = this.apiCallService.selectedProgramId.getValue();
    const selectedTaskId = this.apiCallService.selectedTaskId.getValue();
    this.expandedElement = selectedProgramId;
    this.expandedChild = selectedTaskId;
    setTimeout(() => {
      const el1 = document.getElementById(
        'workflow_' + selectedProgramId.id
      ) as HTMLButtonElement;
      if (el1) {
        el1.click();
        setTimeout(() => {
          const el2 = document.getElementById(
            'child_' + selectedTaskId.id
          ) as HTMLButtonElement;
          el2.click();
          const id = this.apiCallService.editedTask.getValue();
          if (id) {
            this.editTask(id);
          }
        }, 1000);
      }
    }, 1000);
  }

  displayedColumns: string[] = [
    'workflowId',
    'ponumber',
    'totalPrograms',
    'crowd',
    'managed',
    'action',
  ];
  taskColumns: string[] = ['taskProgram', 'programId', 'quires', 'category', 'type', 'durationTime', 'userType', 'action'];
  // subtaskColumns: string[] = ['taskProgram', 'action'];
  expandedElement: PeriodicElement | null;
  expandedChild: any;

  ngOnInit(): void {
    // this.usrDialog(160)
    this.getClients();
    this.getContacts();
    this.getcourse();
    this.getClientNames();
    this.pageData = this.appSetting.workflowPageFilter.getValue();
  }

  ngAfterViewInit(): void {
    document.querySelector('html')?.classList.remove('cdk-global-scrollblock');
  }

  sortedData: any = [];
  form: any;
  paginator: any;

  manageDialgue(id: number) {
    // console.log('cid', id);
    const dialogRef = this.dialog.open(ManageClientComponent, {
      width: '34%',
      height: '100%',
      position: { right: '0' },
      data: id,
    });
    dialogRef.afterClosed().subscribe((data) => {
      // console.log("Dialog Closed", res);
    });
  }

  onNoClick() {
    this.dialogRef.close();
  }

  onPaginateChange(event: any) {
    this.appSetting.workflowPageFilter.next(event);
    this.getClients();
  }

  checkClient(id: number) {
    if (this.checkedClients.has(id)) {
      this.checkedClients.delete(id);
    } else {
      this.checkedClients.add(id);
    }
  }

  sendToClient() {
    clearTimeout(this.timer);
    setTimeout(() => {
      this.api
        .postData(Paths.SendInvitationToContact, [...this.checkedClients])
        .subscribe((res: any) => {
          this.sharedService.showToast('Client Invited Successfully');
          this.closebutton.nativeElement.click();
          console.log(res);
        });
    }, 600);
  }

  editDailgue(id: number) {
    const dialogRef = this.dialog.open(EditClientComponent, {
      width: '50%',
      height: '100%',
      data: id,
      position: { right: '0' },
    });
    dialogRef.afterClosed().subscribe((res) => {
      this.getClients();
    });
  }

  handleSendInvite(id: number) {
    this.api
      .getData(`${Paths.GetAllContacts}?programId=${id}`)
      .subscribe((res: any) => {
        this.inviteData = res.result;
      });
  }

  usrDialog2() {
    const dialogRef = this.dialog.open(CreateClientComponent, {
      width: '50%',
      height: '100%',
      position: { right: '0' },
    });
    dialogRef.afterClosed().subscribe((res) => {
      this.getClients();
    });
  }

  usrDialog(id: any, element:PeriodicElement) {
    console.log(id);
    const dialogRef = this.dialog.open(TaskProgramComponent, {
      width: '30%',
      height: '100%',
      position: { right: '0' },
      data: {
        id: id,
      },
    });
    dialogRef.afterClosed().subscribe((res) => {
      setTimeout(() => {
        this.showWorkflow(id, element);
      }, 1000);
    });
  }

  sendInvite(id: number) {
    const cListByClient = [1, 2, 3];
    this.api
      .postData(Paths.SendInvitationToContact, cListByClient)
      .subscribe((data) => {
        console.log('sdata', data);
      });
    // console.log('client', id);
  }

  // showWorkflow(id: number, element: PeriodicElement) {
  //   console.log(element);
  //   this.expandedElement = this.expandedElement === element ? null : element;
  //   this.ctId = id;
  //   this.ShowNav = id;
  //   if (this.expandedElement) {
  //     this.api.getData(`${Paths.GetProgramsByClientId}?CustomerId=${id}`).subscribe((data: any) => {
  //       this.programsByClient = data.result;
  //       if (id === this.programsByClient[0].customerId) {
  //         this.ShowNav = this.programsByClient[0].customerId;
  //         this.showicon = this.programsByClient[0].customerId;
  //       }
  //     });
  //   }
  // }

  showWorkflow(id: number, element: PeriodicElement) {
    console.log(element);
    this.expandedElement = this.expandedElement === element ? null : element;
    this.pId = id;
    this.ShowNav = id;
    if (this.expandedElement) {
      this.api
        .getData(`${Paths.GetTasksByProgramId}?ProgramId=${this.pId}`)
        .subscribe((data: any) => {
          this.programsByClient = data.result;
          console.log('this.programsByClient', this.programsByClient);
        });
    }
  }
  shareul(id:any){
    this.dialog.open(ShareulComponent,{
      width:'30%'
    })
    
  }
  editTask(id: number) {
    if (this.expandedElement && this.expandedElement.id) {
      this.apiCallService.selectedProgramId.next(this.expandedElement);
    }
    if (this.expandedChild && this.expandedChild.id) {
      this.apiCallService.selectedTaskId.next(this.expandedChild);
    }
    this.apiCallService.editedTask.next(id);
    const dialogRef = this.dialog.open(TaskProgramComponent, {
      width: '30%',
      height: '100%',
      position: { right: '0' },
      data: {
        id: id,
        edit: true,
      },
    });
    dialogRef.afterClosed().subscribe((res) => {
      setTimeout(() => {
        this.getTaskData(id);
      }, 1000);
    });
  }

  showTaskDetails(id: number, element: any) {
    this.expandedChild = this.expandedChild === element ? null : element;
    this.pId = id;
    this.ShowTNav = this.pId;
    if (this.expandedChild) {
      this.getTaskData(id);
    }
  }

  getTaskData(id: number) {
    this.api
      .getData(`${Paths.GetTasksByProgramId}?ProgramId=${id}`)
      .subscribe((data: any) => {
        if (data && data.result) {
          const { result }: any = data;
          this.TaskDetailsByClient = result;
          // this.TaskDetailsByClient = data.result.filter((x:any) => x.customerId === this.ctId);
          console.log('this.TaskDetailsByClient', this.TaskDetailsByClient);
          // if (this.pId === result.customerId) {
            this.ShowTNav = result.customerId;
            this.showTicon = result.customerId;
          // }
        }
      });
  }

  viewData(id: any) {
    this.isUpdate = true;
    this.clientContacts.map((item: any) => {
      if (item.id === id) {
        this.AddContactForm.get('personName')?.setValue(item.personName);
        this.AddContactForm.get('email')?.setValue(item.email);
      }
    });
  }

  deleteTask(id: any) {
    this.api
      .deleteData(`${Paths.DeleteTask}?TaskId=${id}`)
      .subscribe((res) => {
        this.sharedService.showToast('Task Deleted Successfully!');
        this.getClients();
        this.dialog.closeAll();
      });
  }

  deleteWorkflow(id: number) {
    this.api
      .deleteData(`${Paths.DeleteProgram}?programId=${id}`)
      .subscribe((res) => {
        this.sharedService.showToast('Client Deleted Successfully!');
        this.getClients();
        this.dialog.closeAll();
      });
  }

  onDeleteClient(id: any) {
    let popupData: ConfirmPopupProps;
    this.api.getData(`${Paths.ValidateDeleteWorkflow}?programId=${id}`).subscribe((res: any) => {
      const { result } = res;
      if (!result) {
        popupData = {
          heading: 'Delete Workflow',
          description: 'You are trying to delete an workflow this will remove any configuration details associated with it. Do you want proceed further ?',
          iconName: 'danger',
          buttons: [
            {
              buttonType: 'secondary',
              label: 'No',
              onClick: () => this.dialog.closeAll(),
            },
            {
              buttonType: 'primary',
              label: 'Yes',
              onClick: () => this.deleteWorkflow(id),
            }
          ]
        }
      } else {
        popupData = {
          heading: 'Users and Programs active under workflow',
          description: 'These are active users and programs under the worklfow. Please remove all users and programs before deleting an workflow',
          iconName: 'warning',
          buttons: [
            {
              buttonType: 'primary',
              label: 'Close',
              onClick: () => this.dialog.closeAll(),
            }
          ]
        }
      }

      const dialogRef = this.dialog.open(ConfirmPopupComponent, {
        width: "30%",
        data: popupData
      });
      dialogRef.afterClosed().subscribe(() => {
        // handle close
      })
    })
  }

  onDeleteTask(id: any) {
    let popupData: ConfirmPopupProps;
    this.api.getData(`${Paths.ValidateDeleteTasks}?taskId=${id}`).subscribe((res: any) => {
      const { result } = res;
      if (!result) {
        popupData = {
          heading: 'Delete Program',
          description: 'You are trying to delete a program. this will remove any saved data associated with it. Do you want proceed further ?',
          iconName: 'danger',
          buttons: [
            {
              buttonType: 'secondary',
              label: 'No',
              onClick: () => this.dialog.closeAll(),
            },
            {
              buttonType: 'primary',
              label: 'Yes',
              onClick: () => this.deleteTask(id),
            }
          ]
        }
      } else {
        popupData = {
          heading: 'Users active under Program',
          description: 'These are active users under program. Please remove all users before deleting an program',
          iconName: 'warning',
          buttons: [
            {
              buttonType: 'primary',
              label: 'Close',
              onClick: () => this.dialog.closeAll(),
            }
          ]
        }
      }

      const dialogRef = this.dialog.open(ConfirmPopupComponent, {
        width: "30%",
        data: popupData
      });
      dialogRef.afterClosed().subscribe(() => {
        // handle close
      })
    })
  }

  Sendinvite(id: number) {
    const cListByClient = [id];
    this.api
      .postData(Paths.SendInvitationToContact, cListByClient)
      .subscribe((data) => {
        console.log('sdata', data);
      });
    console.log('client', id);
  }

  updateTask(id: any) {
    const tId = id;
    this.api.getData(`${Paths.GetTask}?taskId=${id}`).subscribe((res) => {
      console.log(res);
    });
  }

  getContacts() {
    this.api
      .getData(`${Paths.GetAllContacts}?programId=1`)
      .subscribe((data: any) => {
        // console.log(data.result);
        this.clientContacts = data.result;
      });
  }

  getClients(event?: any) {
    const value = event && event.target && event.target.value;
    this.pageData = this.appSetting.workflowPageFilter.getValue();
    this.pageData.search = value || '';
    clearTimeout(this.timer);
    this.timer = setTimeout(() => {
      this.api
        .postData(Paths.GetClients, this.pageData)
        .subscribe((res: any) => {
          const { result, total }: any = res;
          this.clients = result;
          this.dataSource.data = result;
          this.totalRecordCount = total || 0;
        });
    }, 300);
  }

  getcourse() {
    this.courselist = [{ id: 1, name: '', isselected: false }];
  }

  onchange() {
    console.log(this.courselist);
  }

  onchanges() {
    console.log(this.checkboxs);
  }

  onChange() {
    console.log('this.selCustId', this.selCustId);
    this.api
      .getData(`${Paths.GetAllContacts}?programId=1`)
      .subscribe((data: any) => {
        console.log(data.result);
        this.clientContacts = data.result;
      });
  }
  changeCheck(event: any) {
    this.disabledAgreement = !event.target.checked;
  }
  getClientNames() {
    this.api.getData(Paths.GetAllClientNames).subscribe((res) => {
      this.Clientname = res;
    });
  }
}
