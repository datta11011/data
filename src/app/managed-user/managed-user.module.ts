import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { Routes, RouterModule } from "@angular/router";
import { HttpClientModule } from "@angular/common/http";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { MatSortModule } from "@angular/material/sort";
import { NgxPermissionsModule } from "ngx-permissions";
import { AuthGuard } from './../auth.guard';
import { LandingPageComponent } from '../shared/landing-page/landing-page.component';
import { LoginComponent } from '../shared/login/login.component';
import { ManagedDashboardComponent } from "./managed-dashboard/managed-dashboard.component";
import { SharedModule } from "../shared/shared.module";
import { ManagedFinaldashboardComponent } from "./managed-finaldashboard/managed-finaldashboard.component";
import { ManagedAutonomousComponent } from "./managed-autonomous/managed-autonomous.component";
import { ManagedInstructionsComponent } from "./managed-instructions/managed-instructions.component";
import { ManagedTaskpageComponent } from "./managed-taskpage/managed-taskpage.component";
import { MaterialModule } from "../shared/material/material.module";
import { ManagedUploadtaskComponent } from './managed-uploadtask/managed-uploadtask.component';
import { ClientWorkflowComponent } from "../admin/client-workflow/client-workflow.component";

const routes: Routes = [
  {
    path: '',
    redirectTo: 'managed-dashboard',
    pathMatch: 'full',
  },

  {
    path: 'managed-dashboard',
    component: ManagedDashboardComponent,
    canActivate: [AuthGuard],
  }, // visit home only if authenticated
  {
    path: 'managed-taskpage',
    component: ManagedTaskpageComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'managed-finaldashboard',
    component: ManagedFinaldashboardComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'managed-autonomous',
    component: ManagedAutonomousComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'managed-instructions',
    component: ManagedInstructionsComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'managed-uploadtask',
    component: ManagedUploadtaskComponent,
    canActivate: [AuthGuard],
  },

];


@NgModule({
  // tslint:disable-next-line:max-line-length
  declarations: [
    ManagedTaskpageComponent,
    ManagedUploadtaskComponent
  ],
  imports: [
    FormsModule,
    CommonModule,
    HttpClientModule,
    FormsModule,
    MaterialModule,
    ReactiveFormsModule,
    RouterModule.forChild(routes),
    NgxPermissionsModule.forChild(),
    MatSortModule,
    SharedModule

  ],
  exports: [RouterModule],
  entryComponents: [
  ],
})
export class ManagedUser { }
