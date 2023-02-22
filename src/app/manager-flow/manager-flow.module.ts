import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { Routes, RouterModule } from "@angular/router";
import { HttpClientModule } from "@angular/common/http";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { MatSortModule } from "@angular/material/sort";
import { SharedModule } from "../shared/shared.module";
import { NgxPermissionsModule } from "ngx-permissions";
import { AuthGuard } from '../auth.guard';
import { LandingPageComponent } from '../shared/landing-page/landing-page.component';
import { LoginComponent } from '../shared/login/login.component';
import { CustomLoginComponent } from "../shared/custom-login/custom-login.component";
import { ManagedFinaldashboardComponent } from "../managed-user/managed-finaldashboard/managed-finaldashboard.component";
import { ManagerDashboardComponent } from "./manager-dashboard/manager-dashboard.component";
import { ManagerDataAnalystComponent } from "./manager-data-analyst/manager-data-analyst.component";
import { ManagerDataCollectionComponent } from "./manager-data-collection/manager-data-collection.component";
import { ManagerLineAlignmentComponent } from "./manager-line-alignment/manager-line-alignment.component";
import { ManagerQAComponent } from "./manager-qa/manager-qa.component";
import { ManagerSmeComponent } from "./manager-sme/manager-sme.component";
import { ManagerTaskpageComponent } from "./manager-taskpage/manager-taskpage.component";
import { ManagerUserComponent } from "./manager-user/manager-user.component";
import { MaterialModule } from "../shared/material/material.module";
const routes: Routes = [
  // {
  //   path: '',
  //   redirectTo: 'landing-page',
  //   pathMatch: 'full',
  // },
  // { path: 'login', component: LoginComponent },
  // { path: 'landing-page', component: LandingPageComponent },
  {
    path: '',
    redirectTo: 'manager-dashboard',
    pathMatch: 'full',
  },
  {
    path: 'manager-dashboard',
    component: ManagerDashboardComponent,
    canActivate: [AuthGuard],
  }, // visit home only if authenticated
  {
    path: 'manager-data-analyst',
    component: ManagerDataAnalystComponent,
    canActivate: [AuthGuard],
  }, // visit home only if authenticated
  {
    path: 'manager-data-collection',
    component: ManagerDataCollectionComponent,
    canActivate: [AuthGuard],
  }, // visit home only if authenticated
  {
    path: 'manager-finaldashboard',
    component: ManagedFinaldashboardComponent,
    canActivate: [AuthGuard],
  }, // visit home only if authenticated
  {
    path: 'manager-line-alignment',
    component: ManagerLineAlignmentComponent,
    canActivate: [AuthGuard],
  }, // visit home only if authenticated
  {
    path: 'manager-qa',
    component: ManagerQAComponent,
    canActivate: [AuthGuard],
  }, // visit home only if authenticated
  {
    path: 'manager-sme',
    component: ManagerSmeComponent,
    canActivate: [AuthGuard],
  }, // visit home only if authenticated
  {
    path: 'manager-taskpage',
    component: ManagerTaskpageComponent,
    canActivate: [AuthGuard],
  }, // visit home only if authenticated
  {
    path: 'manager-user',
    component: ManagerUserComponent,
    canActivate: [AuthGuard],
  }, // visit home only if authenticated
];


@NgModule({
  // tslint:disable-next-line:max-line-length
  declarations: [
    ManagerDashboardComponent,
    ManagedFinaldashboardComponent,
    ManagerDataAnalystComponent,
    ManagerDataCollectionComponent,
    ManagerLineAlignmentComponent,
    ManagerQAComponent,
    ManagerSmeComponent,
    ManagerTaskpageComponent,
    ManagerUserComponent,


  ],
  imports: [
    CommonModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    SharedModule,
    RouterModule.forChild(routes),
    NgxPermissionsModule.forChild(),
    MatSortModule,
    MaterialModule
  ],
  exports: [RouterModule],
  entryComponents: [
  ],
})
export class ManagedFlow { }