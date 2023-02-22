import { Component, OnInit } from '@angular/core';
import { DialogPosition, MatDialog } from '@angular/material/dialog';
import { endWith } from 'rxjs';
import { CommonApiService } from 'src/app/services/common-api.service';
import { CreateClientComponent } from '../create-client/create-client.component';
import { Paths } from 'src/app/services/constant';


@Component({
  selector: 'app-client-card',
  templateUrl: './client-card.component.html',
  styleUrls: ['./client-card.component.scss']
})
export class ClientCardComponent implements OnInit {

  totalClientCount: any;
  totalWorkflowCount: any;
  totalClientProgramCount: any;
  totalCountProgramById = new Array();
  Totaltask: any;
  clients = new Array();
  clientCount: any;
  clientsProgramCount: any[] = [];

  usrDialog() {
    const dialogRef = this.dialog.open(CreateClientComponent, {
      width: "50%",
      height: "100%",
      position: { right: '0' }
    });

    dialogRef.afterClosed().subscribe((res) => {
      console.log("Dialog Closed", res);
    });
  }

  constructor(private dialog: MatDialog, private api: CommonApiService) { }

  ngOnInit(): void {
    this.api.getData(`${Paths.GetClientWorkFlowsCount}`).subscribe((data: any) => {
      this.totalClientCount = data.result.totalClient;
      this.totalWorkflowCount = data.result.totalWorkflow;
      this.clientsProgramCount = data.result.programsCount;
    })
    
  }
}
