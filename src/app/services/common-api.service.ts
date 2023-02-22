import { Injectable, OnInit } from '@angular/core';
import {
  HttpClient,
  HttpHeaders,
} from '@angular/common/http';
import { AppSettingsService } from './app.settings.service';

export interface LoginAuthReq {
  email: string;
  password: string;
}

@Injectable({
  providedIn: 'root',
})
export class CommonApiService implements OnInit {
  sendInviteToContact(cListByClient: number[]) {
    throw new Error('Method not implemented.');
  }
  getAllContacts: any;
  SearchByEmailId /** COMMON PUT API **/(value: string) {
    throw new Error('Method not implemented.');
  }

  public AddTaskUploadDataURL;

  ngOnInit() { }

  // tslint:disable-next-line:member-ordering
  static HttpOptions() {
    return {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        Authorization: `Bearer ${JSON.parse(
          localStorage.getItem('authToken') as any
        )}`,
        accept: 'application/json',
      }),
    };
  }

  static HttpOptionsMultipart() {
    return {
      headers: new HttpHeaders({
        // 'Content-Type': 'multipart/form-data',
        Authorization: `Bearer ${JSON.parse(
          localStorage.getItem('authToken') as any
        )}`,
        accept: 'multipart/form-data',
      }),
    };
  }

  constructor(
    private appSettings: AppSettingsService,
    private http: HttpClient
  ) {

    this.AddTaskUploadDataURL = appSettings.consultantApiBaseUrl + appSettings.ext.CoreData.Task.AddTaskUploadData;
  }


  /** COMMON GET API **/
  getData(url: string) {
    const path: string = this.appSettings.consultantApiBaseUrl + url;
    return this.http.get(path, CommonApiService.HttpOptions());
  }

  /** COMMON POST API **/
  postData(url: string, data: any) {
    const path: string = this.appSettings.consultantApiBaseUrl + url;
    return this.http.post(path, data, CommonApiService.HttpOptions());
  }

  /** COMMON PUT API **/
  updateData(url: string, data: any) {
    const path: string = this.appSettings.consultantApiBaseUrl + url;
    return this.http.put(path, data, CommonApiService.HttpOptions());
  }

  /** COMMON DELETE API **/
  deleteData(url: string) {
    const path: string = this.appSettings.consultantApiBaseUrl + url;
    return this.http.delete(path, CommonApiService.HttpOptions());
  }

  /** MULTIPART API **/
  uploadTaskFiles(url: string, formData: FormData) {
    const path: string = this.appSettings.consultantApiBaseUrl + url;
    return this.http.post(path, formData, CommonApiService.HttpOptionsMultipart())
  }

}
