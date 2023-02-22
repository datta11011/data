import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-my-profile',
  templateUrl: './my-profile.component.html',
  styleUrls: ['./my-profile.component.scss']
})
export class MyProfileComponent implements OnInit {
  basicinfoDiv : boolean = true;
  personalinfoDiv : boolean = false;
  professionalinfoDiv : boolean = false;
  earningsDiv : boolean = false;
  activityDiv : boolean = false;
  paymentDiv : boolean = false;
  ReferralsDiv : boolean = false;
  othersDiv : boolean = false;
  dcactive = false;
  imactive = false;
  spactive = false;
  txactive = false;
  geactive = false;
  awactive = false;
  profileRef = false;
  profileothers = false;
  constructor() {
  
   }

  ngOnInit(): void {
   console.log('My Profile')
   this.dcactive = true;
   this.imactive = false;
   this.spactive = false;
   this.txactive = false;
   this.geactive = false;
   this.awactive = false;
   this.profileRef = false;
   this.profileothers = false;
  }
  basicinfo(){
    this. basicinfoDiv = true;
    this. personalinfoDiv = false;
    this. professionalinfoDiv = false;
    this.earningsDiv = false;
    this.activityDiv = false;
    this.paymentDiv  = false;
    this.ReferralsDiv = false;
    this.othersDiv = false;
    this.dcactive = true;
    this.imactive = false;
    this.spactive = false;
    this.txactive = false;
    this.geactive = false;
    this.awactive = false;
    this.profileRef = false;
    this.profileothers = false;
  }
  personalinfo(){
    this.basicinfoDiv = false;
    this.personalinfoDiv = true;
    this.professionalinfoDiv = false;
    this.earningsDiv = false;
    this.activityDiv = false;
    this.paymentDiv  = false;
    this.ReferralsDiv = false;
    this.othersDiv = false;
    this.dcactive = false;
    this.imactive = true;
    this.spactive = false;
    this.txactive = false;
    this.geactive = false;
    this.awactive = false;
    this.profileRef = false;
    this.profileothers = false;
  }
  professionalinfo(){
    this.basicinfoDiv = false;
    this.personalinfoDiv = false;
    this.professionalinfoDiv = true;
    this.earningsDiv = false;
    this.activityDiv = false;
    this.paymentDiv  = false;
    this.ReferralsDiv = false;
    this.othersDiv = false;
    this.dcactive = false;
    this.imactive = false;
    this.spactive = true;
    this.txactive = false;
    this.geactive = false;
    this.awactive = false;
    this.profileRef = false;
    this.profileothers = false;
  }
  earnings(){
    this.basicinfoDiv = false;
    this.personalinfoDiv = false;
    this.professionalinfoDiv= false;
    this.earningsDiv = true;
    this.activityDiv = false;
    this.paymentDiv = false;
    this.ReferralsDiv = false;
    this.othersDiv = false;
    this.dcactive = false;
    this.imactive = false;
    this.spactive = false;
    this.txactive = true;
    this.geactive = false;
    this.awactive = false;
    this.profileRef = false;
    this.profileothers = false;
  }
  activity(){
    this.basicinfoDiv = false;
    this.personalinfoDiv = false;
    this.professionalinfoDiv = false;
    this.earningsDiv= false;
    this.activityDiv = true;
    this.paymentDiv  = false;
    this.ReferralsDiv = false;
    this.othersDiv = false;
    this.dcactive = false;
    this.imactive = false;
    this.spactive = false;
    this.txactive = false;
    this.geactive = true;
    this.awactive = false;
    this.profileRef = false;
    this.profileothers = false;
  }
  payment(){
    this.basicinfoDiv = false;
    this.personalinfoDiv = false;
    this.professionalinfoDiv = false;
    this.earningsDiv = false;
    this.activityDiv = false;
    this.paymentDiv= true;
    this.ReferralsDiv = false;
    this.othersDiv = false;
    this.dcactive = false;
    this.imactive = false;
    this.spactive = false;
    this.txactive = false;
    this.geactive = false;
    this.awactive = true;
    this.profileRef = false;
    this.profileothers = false;
  }
  Referrals(){
    this.basicinfoDiv = false;
    this.personalinfoDiv = false;
    this.professionalinfoDiv= false;
    this.earningsDiv = false;
    this.activityDiv = false;
    this.paymentDiv = false;
    this.ReferralsDiv = true;
    this.othersDiv = false;
    this.dcactive = false;
    this.imactive = false;
    this.spactive = false;
    this.txactive = false;
    this.geactive = false;
    this.awactive = true;
    this.dcactive = false;
    this.imactive = false;
    this.spactive = false;
    this.txactive = false;
    this.geactive = false;
    this.awactive = false;
    this.profileRef = true;
    this.profileothers = false;
  }
  others(){
    this.basicinfoDiv = false;
    this.personalinfoDiv = false;
    this.professionalinfoDiv = false;
    this.earningsDiv = false;
    this.activityDiv = false;
    this.paymentDiv = false;
    this.ReferralsDiv = false;
    this.othersDiv = true;
    this.dcactive = false;
    this.imactive = false;
    this.spactive = false;
    this.txactive = false;
    this.geactive = false;
    this.awactive = false;
    this.profileRef = false;
    this.profileothers = true;
  }
  copyMessage(text: string) {
    navigator.clipboard.writeText(text).then().catch(e => console.log(e));
  }
}
