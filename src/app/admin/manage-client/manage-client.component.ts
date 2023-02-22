import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { AnonymousSubject } from 'rxjs/internal/Subject';
import { CommonApiService } from 'src/app/services/common-api.service';
import { Paths } from 'src/app/services/constant';

@Component({
  selector: 'app-manage-client',
  templateUrl: './manage-client.component.html',
  styleUrls: ['./manage-client.component.scss']
})

export class ManageClientComponent implements OnInit {

  clientcontacts = new Array();
  programsByClient = new Array();
  getclient: any;
  customerName: any;
  custId: any;
  checked: boolean = false;
  chck: boolean = false;
  selCustId: any = 0;
  constructor(
    public dialogRef: MatDialogRef<ManageClientComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any, private api: CommonApiService,

  ) {
    this.custId = data;
  }

  ngOnInit(): void {
    this.getClients();
    this.GetProgramsByClientId();
    this.getAllContactsById();
  }

  GetProgramsByClientId() {
    this.api.getData(`${Paths.GetProgramsByClientId}?CustomerId=${this.custId}`).subscribe((res: any) => {
      if (res && res.result) {
        this.programsByClient = res.result;
        // this.getAllContactsById();
      }
    })
  }

  getAllContactsById() {
    this.api.getData(`${Paths.GetAllContactsByClientId}?clientId=${this.custId}`).subscribe((res: any) => {
      if (res && res.result) {
        this.clientcontacts = res.result;
      }
    })
  }

  getClients() {
    this.api.getData(`${Paths.GetClient}?clientId=${this.data}`).subscribe((data: any) => {
      if (data && data.result) {
        const { result }: any = data;
        this.getclient = result;
        this.customerName = result.customerName;
        this.custId = result.id;
      }
    });
  }

  // onChange(id: number) {
  //   this.api.getData(`${Paths.GetAllContacts}?programId=${id}`).subscribe((data: any) => {
  //     console.log(data.result);
  //     this.clientcontacts = data.result;
  //   });
  // }

  onNoClick() {
    this.dialogRef.close();
  }
  dailogClose() {
    this.dialogRef.close()
  }

  onClick(e: any, details: any) {
    const obj = {
      id: details.id,
      createdBy: details.createdBy,
      createdOn: details.createdOn,
      updatedBy: details.updatedBy,
      updatedOn: details.updatedOn,
      activeInd: details.activeInd,
      resultStatus: details.resultStatus,
      action: details.resultStatus,
      programName: details.programName,
      ponumber: details.ponumber,
      customerId: details.customerId,
      startdate: details.startdate,
      locationId: details.locationId,
      enddate: details.enddate,
      statusId: e.checked
    }
    this.api.updateData(`${Paths.UpdateProgram}`, obj).subscribe((res: any) => {
      if(res && res.result){
        this.api.getData(`${Paths.ManageProgramContacts}?programId=${obj.id}`).subscribe((data: any) =>{
          this.getAllContactsById();
      })
      }
    })
  };

  onChange1(e: any, details: any) {
    const obj = {
      id: details.id,
      createdBy: details.createdBy,
      createdOn: details.createdOn,
      updatedBy: details.updatedBy,
      updatedOn: details.updatedOn,
      activeInd: details.activeInd,
      resultStatus: details.resultStatus,
      action: details.action,
      programId: details.programId,
      personId: details.personId,
      orgTypeId: details.orgTypeId,
      personName: details.personName,
      email: details.email,
      departmentName: details.departmentName,
      phoneNumber: details.phoneNumber,
      statusId: e.checked
    }
    this.api.updateData(`${Paths.UpdateContact}`, obj).subscribe((res: any) => {
      console.log(res);
    })
  }
  contact() {
    this.api.getData(`${Paths.GetAllContacts}?programId=1`).subscribe((data: any) => {
      this.clientcontacts = data.result;
    });
  }
}
