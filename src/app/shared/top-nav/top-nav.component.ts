import { Auth } from '@angular/fire/auth';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HotToastService } from '@ngneat/hot-toast';
import { CommonApiService } from 'src/app/services/common-api.service';
import { Paths } from 'src/app/services/constant';
import { SharedService } from 'src/app/services/sharedService.service';
import { AuthService } from 'src/app/auth.service';
// import { AuthenticationService } from 'src/app/services/authentication.service';


@Component({
  selector: 'app-top-nav',
  templateUrl: './top-nav.component.html',
  styleUrls: ['./top-nav.component.scss']
})
export class topNavComponent implements OnInit {

  UserName: any = localStorage.getItem('loggedInUserName');
  Clients: any;
  LoginRole: any = localStorage.getItem('LoginRole');
  constructor(private router: Router,
    private sharedService: SharedService,
    private toast: HotToastService,
    private api: CommonApiService,
    private auth: AuthService) { }

  ngOnInit(): void {
    this.getClientNames()
  }
  logout() {
    this.auth.logout();
    this.router.navigate([""]);
    this.sharedService.showToast("Logout Succesfully");

    this.sharedService.showToast("Sign Out Successfully!");
  }
  getClientNames() {
    this.api.getData(Paths.GetAllClientNames).subscribe((res) => {
      this.Clients = res;
    });
  }
  navigateTo(item: any) {
    this.router.navigate(['/autonomous-vehicle/' + item.id]);
  }
}


