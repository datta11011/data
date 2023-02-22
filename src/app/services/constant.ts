export const roles: any = {
  27: 'superadmin',
  30: 'sme',
  40: 'crowdflow',
  28: 'managerflow',
  29: 'manageduser',
  31: 'QAflow',
}
export const Location = 1;
export const Department = 2;
export const Category = 3;
export const MIMEType = 4;
export const ToolType = 5;
export const Lider = 6;
export const Role = 7;
export const Country = 8;
export const StatusId = 9;

export const LOGGED_IN_USER: any = localStorage.getItem('loggedInUserName') || '';

export const Paths = {
  GetClient: 'api/Admin/GetClient',
  GetBaseKeys: 'api/Admin/GetBaseKeys',
  GetBaseKeyValues: 'api/Admin/GetBaseKeyValues',
  GetAllContacts: 'api/Admin/GetAllContacts',
  GetAllContactsByClientId: 'api/Admin/GetAllContactsByClientId',
  GetClientWorkFlowsCount: 'api/Admin/GetClientWorkFlowsCount',
  GetProgramsByClientId: 'api/Admin/GetProgramsByClientId',
  GetTaskDetailsByClient: 'api/Task/GetTaskDetailsByClient',
  GetTasksByProgramId: 'api/Task/GetTasksByProgramId',
  GetAllClientNames: 'api/Admin/GetAllClientNames',
  GetTask: 'api/Task/GetTask',
  GetUserCount: 'api/User/GetUserCount',
  SearchClientName: 'api/Admin/SearchClientName',
  GetTasksCount: 'api/Task/GetTasksCount',
  GetAllPersons: 'api/User/GetAllPersons',
  GetPerson: 'api/User/GetPerson',
  Login: 'api/Authorization/Login',
  GetLoginUser: 'api/Authorization/GetLoginUser',
  AddClient: 'api/Admin/AddClient',
  AddContact: 'api/Admin/AddContact',
  AddPerson: 'api/User/AddPerson',
  GetClients: 'api/Admin/GetClients',
  AddAssignTask: 'api/Task/AddAssignTask',
  AddTask: 'api/Task/AddTask',
  SendInvitationToContact: 'api/Admin/SendInvitationToContact',
  UpdateTask: 'api/Task/UpdateTask',
  UpdateClient: 'api/Admin/UpdateClient',
  UpdatePerson: 'api/User/UpdatePerson',
  UpdateContact: 'api/Admin/UpdateContact',
  DeleteTask: 'api/Task/DeleteTask',
  DeleteAssignedTask: 'api/Task/DeleteAssignedTask',
  DeletePerson: 'api/User/DeletePerson',
  BlockPerson: 'api/User/BlockUser',
  DeleteProgramContact: 'api/Admin/DeleteProgramContact',
  DeleteProgram: 'api/Admin/DeleteProgram',
  DeleteClient: 'api/Admin/DeleteClient',
  SearchByEmailId: 'api/User/ValidateEmail',
  ValidatePoNumber: "api/Admin/ValidatePOnumberByClientId",
  UpdateProgram: 'api/Admin/UpdateProgram',
  GetClientTask: 'api/Task/GetClientsTasks',
  ManageProgramContacts: 'api/Admin/ManageProgramContacts',
  AddTaskUploadData: 'api/Task/AddTaskUploadData',
  ValidateProgramContactEmailPhone: 'api/Admin/ValidateProgramContactEmailPhone',
  GetAssignTasks: 'api/Task/GetAssignTasks',
  UpdateUserStatusActive: 'api/User/UpdateUserStatusActive',
  SendInvitationToUser: 'api/User/SendUserInvitation',
  ValidateCustomerCode: 'api/Admin/ValidateCustomerCode',
  changePassword: 'api/Authorization/ChangePassword',
  ValidateDeleteWorkflow: 'api/Admin/ValidateDeleteWorkflow',
  GetTasksStatus: 'api/Task/GetTasksStatus',
  ValidateDeleteTasks: 'api/Admin/ValidateDeleteTasks',
  GetWorkFlowById:'api/Admin/GetWorkFlowById',
  DeafaultSendInvitation: 'api/User/DeafaultSendInvitation'
}
