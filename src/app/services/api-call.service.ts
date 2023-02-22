import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiCallService {

  // baseUrl = 'https://dataannotations-api.azurewebsites.net/'


  consultantPagefilter: BehaviorSubject<Object> = new BehaviorSubject<Object>({
    pageIndex: 0,
    pageSize: 10,
    search: ""
  });
  selectedProgramId: BehaviorSubject<any> = new BehaviorSubject<any>({});
  selectedTaskId: BehaviorSubject<any> = new BehaviorSubject<any>({});
  editedTask: BehaviorSubject<number> = new BehaviorSubject<number>(0);

  constructor() { }
}
