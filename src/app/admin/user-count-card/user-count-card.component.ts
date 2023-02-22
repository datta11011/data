import { Component, OnInit } from '@angular/core';
import { DialogPosition, MatDialog } from '@angular/material/dialog';
import { AppSettingsService } from 'src/app/services/app.settings.service';
import { CommonApiService } from 'src/app/services/common-api.service';
import { Paths } from 'src/app/services/constant';

@Component({
  selector: 'app-user-count-card',
  templateUrl: './user-count-card.component.html',
  styleUrls: ['./user-count-card.component.scss']
})
export class UserCountCardComponent implements OnInit {

  getUserCountCol: any;

  constructor(
    private dialog: MatDialog,
    private api: CommonApiService,
    public appSetting: AppSettingsService
  ) { }

  ngOnInit(): void {
    this.getUserCount();
  }

  getUserCount() {
    this.api.getData(`${Paths.GetUserCount}?month=${1}&year=${22}`).subscribe((data: any) => {
      console.log('UserCount', data.result)
      this.getUserCountCol = data.result;
      // console.log('UserCountList', data.result.userDTOs[0].statusOfUserCont);
    })
  }

}
