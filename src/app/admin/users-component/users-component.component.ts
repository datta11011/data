import { Component, OnInit } from '@angular/core';
import { DialogPosition, MatDialog } from '@angular/material/dialog';
import { CommonApiService } from 'src/app/services/common-api.service';
import { Paths, Role, roles } from 'src/app/services/constant';
import { AddUserComponent } from '../add-user/add-user.component';
import { SharedService } from 'src/app/services/sharedService.service';
import { FormGroup } from '@angular/forms';
import { AuthService } from 'src/app/auth.service';
import { AssignTaskComponent } from '../assign-task/assign-task.component';
import { AppSettingsService } from 'src/app/services/app.settings.service';
import { MatTableDataSource } from '@angular/material/table';

export interface PeriodicElement {
  id: number;
  createdBy: string;
  createdOn: string;
  updatedBy: string;
  updatedOn: string;
  activeInd: boolean;
  action: number;
  resultStatus: number;
  program: any;
  imageUrl: string;
  firstName: string;
  lastName: string;
  rolename: string;
  email1: string;
  phone1: number;
  statusname: string;
}
const WORKFLOW_DATA: PeriodicElement[] = [];

@Component({
  selector: 'app-users-component',
  templateUrl: './users-component.component.html',
  styleUrls: ['./users-component.component.scss'],
})
export class UsersComponentComponent implements OnInit {
  displayedColumns: string[] = [
    'name',
    'role',
    'email',
    'phone',
    'onBoardedOn',
    'status',
    'action',
  ];

  AllPersons = new Array();
  getRole: any;
  roleId: number = 0;
  isEnable: number = 0;
  type: number = 0;
  clientDetails: any;
  dataSource = WORKFLOW_DATA;
  pageData: any;
  totalRecordCount: number = 0;
  nrSelect: any = 0;
  timer: any = null;
  searchTitle: string = '';

  constructor(
    private dialog: MatDialog,
    private api: CommonApiService,
    private sharedService: SharedService,
    private auth: AuthService,
    private apiCallService: AppSettingsService
  ) {}

  ngOnInit(): void {
    this.getAllPersons();
    this.GetBaseKeys();
    this.GetBaseKeyValues();
    this.pageData = this.apiCallService.workflowPageFilter.getValue();
  }

  loggedInUserId = this.auth.getToken();
  ManagerId: number = 28;
  superAdminId: number = 27;
  managerLoggedInId = '4';
  superAdminLoggedInId = "3";
  UserStatusId: number = 38;
  ActiveUserStatus: number = 36;


  usrDialog() {
    const dialogRef = this.dialog.open(AddUserComponent, {
      width: '30%',
      height: '90%',
      data: {
        edit: false,
      },
    });
    dialogRef.afterClosed().subscribe((res) => {
      this.getAllPersons();
      // console.log("Dialog Closed", res);
    });
  }

  assignTaskPage(data: any) {
    const dialogRef = this.dialog.open(AssignTaskComponent, {
      width: "30%",
      height: "100%",
      position: { right: '0' },
      data: [data],
    });
    dialogRef.afterClosed().subscribe((res) => {
      this.getAllPersons();
    });
  }

  GetBaseKeys() {
    this.api.getData(Paths.GetBaseKeys).subscribe((response) => {
      response;
    });
  }

  GetBaseKeyValues() {
    this.api
      .getData(`${Paths.GetBaseKeyValues}?baseKeyId=${Role}`)
      .subscribe((res) => {
        this.getRole = res;
      });
  }
  // GetBaseKeyValues() {
  //   this.api.getData(`${Paths.GetBaseKeyValues}?baseKeyId=${Role}`).subscribe((res:any) => {
  //     this.getRole=[];
  //     var getItems :any;
  //     getItems=res["result"];
  //     getItems.forEach((element:any) => {
  //       if(element.id !=localStorage.getItem("LoggedInUserId")){
  //         this.getRole.push(element)
  //       }
  //     });
  //     // this.getRole = this.getRole.filter( (role: { baseKeyValueName: string; }) => role.baseKeyValueName == 'Super Admin' || role.baseKeyValueName == 'Manager');
  //   });
  // }

  getAllPersons(event?: any) {
    this.searchTitle = event && event.target && event.target.value;
    this.pageData = this.apiCallService.workflowPageFilter.getValue();
    this.pageData.search = this.searchTitle || "";
    // this.pageData.type = this.nrSelect;
    clearTimeout(this.timer);
    this.timer = setTimeout(() => {
      this.api
        .postData(`${Paths.GetAllPersons}?roleId=${this.roleId}`, this.pageData)
        .subscribe((res: any) => {
          const { result, total }: any = res;
          this.dataSource = result;
          this.totalRecordCount = total || 0;
        });
    }, 300);
  }

  updateRoleAndStatus(type: string, id: number): void {
    switch (type) {
      case 'ROLE':
        this.roleId = id;
        break;
      case 'STATUS':
        this.pageData.type = id;
        break;
    }
    this.getAllPersons();
  }

  getDropdownText(): string {
    let dropdownText: string = 'Categories';
    switch (this.pageData.type) {
      case 0:
        dropdownText = 'All';
        break;
      case 1:
        dropdownText = 'Active';
        break;
      case 2:
        dropdownText = 'Blocked';
        break;
    }

    return dropdownText;
  }

  onDeletePerson(id: any) {
    this.api
      .deleteData(`${Paths.DeletePerson}?PersonId=${id}`)
      .subscribe((res) => {
        this.getAllPersons();
        this.sharedService.showToast('User Deleted  Successfully!');
      });
  }

  blockPerson(id: number) {
    this.api.postData(`${Paths.BlockPerson}?PersonId=${id}`, null).subscribe(res => {
      this.getAllPersons();
      this.sharedService.showToast("User Blocked Successfully!");
    })
  }

  sendInvitation(id: number) {
    this.api.postData(`${Paths.SendInvitationToUser}?PersonId=${id}`, null).subscribe((res: any) => {
      if (res) {
        this.api.postData(`${Paths.DeafaultSendInvitation}?personId=${id}`, null).subscribe((data: any) => {
          if (data) {
            this.sharedService.showToast("Invitation Sent Successfully!");
            this.getAllPersons();
          }
        })
      }
    })
  }

  editUser(id: number) {
    // console.log('personId', id);
    const dialogRef = this.dialog.open(AddUserComponent, {
      width: '30%',
      height: '90%',
      data: {
        id: id,
        edit: true,
      },
    });
    dialogRef.afterClosed().subscribe((res) => {
      this.getAllPersons();
    });
  }

  onPaginateChange(event: any) {
    this.apiCallService.workflowPageFilter.next(event);
    this.getAllPersons();
  }

  // getSingleClient(id: number) {
  //   this.api.getData(`${Paths.GetClient}?clientId=${id}`).subscribe((res) => {
  //     this.clientDetails = res;
  //     // console.log("*******", this.clientDetails);
  //   });
  // }
}
