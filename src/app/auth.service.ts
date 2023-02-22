import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { NgxPermissionsService } from 'ngx-permissions';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  public loggedIn: BehaviorSubject<boolean> = new BehaviorSubject(false);

  constructor(
    private router: Router,
    private permissionsService: NgxPermissionsService,) { }

    sendToken(email: string,token: string, personId: any, role: string, identity: any, name: string, profileFileUrl: string) {
     localStorage.setItem("LogInEmail", email)
      localStorage.setItem("LoggedInUser", token)
      localStorage.setItem("LoggedInPersonId", personId)
      localStorage.setItem('LoggedInUserId', identity)
      localStorage.setItem("LoginRole", role)
      localStorage.setItem("loggedInUserName", name)
      localStorage.setItem('userProfile', profileFileUrl);
    }
    getToken() {
      return localStorage.getItem("LoggedInUser")
    }

    getRole() {
      return localStorage.getItem("LoginRole")
    }
    isLoggedIn() {
      return this.getToken() !== null;
    }

    logout() {
      localStorage.removeItem("LogInEmail")
      localStorage.removeItem("LoggedInUser")
      localStorage.removeItem("LoggedInPersonId")
      localStorage.removeItem('LoggedInUserId')
      localStorage.removeItem("LoginRole")
      localStorage.removeItem("loggedInUserName")
      localStorage.removeItem('userProfile');
      localStorage.removeItem('authToken');
    }

}
