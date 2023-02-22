import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-classification-table',
  templateUrl: './product-classification-table.component.html',
  styleUrls: ['./product-classification-table.component.scss']
})
export class ProductClassificationTableComponent implements OnInit {
  UserName: any = localStorage.getItem('loggedInUserName');
  constructor() { }

  ngOnInit(): void {
  }

}
