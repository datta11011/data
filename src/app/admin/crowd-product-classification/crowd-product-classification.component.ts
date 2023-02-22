import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-crowd-product-classification',
  templateUrl: './crowd-product-classification.component.html',
  styleUrls: ['./crowd-product-classification.component.scss']
})
export class CrowdProductClassificationComponent implements OnInit {
  UserName: any = localStorage.getItem('loggedInUserName');
  constructor() { }

  ngOnInit(): void {
  }

}
