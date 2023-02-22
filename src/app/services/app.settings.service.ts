import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";

@Injectable({
  providedIn: "root",
})
export class AppSettingsService {

  workflowPageFilter: BehaviorSubject<Object> = new BehaviorSubject<Object>({
    pageIndex: 0,
    pageSize: 10,
    previousPageIndex:1,
  });

  public consultantApiBaseUrl = "https://dataannotations-api.azurewebsites.net/";
  // public consultantApiBaseUrl = "https://localhost:44398/";


  //EXT
  public ext = {
    CoreData: {
      auth: {
        login: 'api/Authorization/Login',
        getUserDetails: 'api/Authorization/GetLoginUser',
        customer: {
          addCustomer: '/add-cus'
        }
      },
      Admin: {
        GetBasekeys: "api/Admin/GetBaseKeys",
        GetBaseKeyValues: "api/Admin/GetBaseKeyValues",
        GetClients: "api/Admin/GetClients",
        GetClient: "api/Admin/GetClient",
        GetProgramsByClientId: "api/Admin/GetProgramsByClientId",
        GetAddClient: "api/Admin/AddClient",
        AddContact: "api/Admin/AddContact",
        GetAllContacts: "api/Admin/GetAllContacts",
        UpdateContact: "api/Admin/UpdateContact",
        DeleteContact: "api/Admin/DeleteProgramContact",
        saveTask: "api/Admin/SaveTask",
        GetTotalClientProgramCount: "api/Admin/TotalClientProgramCount",
        GetClientWorkFlowsCount: "api/Admin/GetClientWorkFlowsCount",
        GetTotalCountProgramById: "api/Admin/TotalCountProgramById",
        GetProgramContactById: "api/Admin/GetProgramContactById",
        SendInvitationToContact: "api/Admin/SendInvitationToContact",
        SearchClientName: "api/Admin/SearchClientName",
        UpdateClient: "api/Admin/UpdateClient",
        DeleteClient: "api/Admin/DeleteClient",
        DeleteProgram: "api/Admin/DeleteProgram",
        GetAllClientNames: "api/Admin/GetAllClientNames",
        GetAllContactsByClientId: "api/Admin/GetAllContactsByClientId",
        ValidatePoNumber: "api/Admin/ValidatePOnumber",
      }
      ,
      User: {
        GetAllPersons: "/api/User/GetAllPersons",
        AddPerson: "/api/User/AddPerson",
        GetUserCount: "/api/User/GetUserCount",
        GetPerson: "/api/User/GetPerson",
        BlockPerson: "/api/User/BlockUser",
        UpdatePerson: "/api/User/UpdatePerson",
        DeletePerson: "api/User/DeletePerson",
        SearchEmailbymailId :"api/User/ValidateEmail",
      }
      ,
      Task: {
        AddTaskUploadData: "/api/Task/AddTaskUploadData",
        GetAssignTasks:"api/Task/GetAssignTasks",
      }
    },
  };


  constructor() { }
}
