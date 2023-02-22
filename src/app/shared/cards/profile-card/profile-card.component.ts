import { Component, OnInit } from '@angular/core';
import {  Input } from '@angular/core'; // First, import Input

@Component({
  selector: 'app-profile-card',
  templateUrl: './profile-card.component.html',
  styleUrls: ['./profile-card.component.scss']
})
export class ProfileCardComponent implements OnInit {

  @Input() showFooter = false;
  constructor() { }

  UserName : any = localStorage.getItem('loggedInUserName');

  ngOnInit(): void {
  }

  public get permission() {
    return localStorage['LoginRole'] == 'Super' ? false : true;
  }

}
