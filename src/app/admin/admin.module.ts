import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from "@angular/router";
import { LoginComponent } from '../shared/login/login.component';
import { LandingPageComponent } from '../shared/landing-page/landing-page.component';
import { CustomLoginComponent } from '../shared/custom-login/custom-login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AuthGuard } from '../auth.guard';
import { NgxPermissionsModule } from 'ngx-permissions';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { ManagerTableComponent } from './manager-table/manager-table.component';
import { SharedModule } from '../shared/shared.module';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from "@angular/common/http";
import { MaterialModule } from '../shared/material/material.module';
import { AutonomousVehicleComponent } from './autonomous-vehicle/autonomous-vehicle.component';
import { ClientWorkflowComponent } from './client-workflow/client-workflow.component';
import { CreateClientComponent } from '../shared/cards/create-client/create-client.component';
import { UsersComponentComponent } from './users-component/users-component.component';
import { UserCountCardComponent } from './user-count-card/user-count-card.component';
import { AnalyticsProgressbarComponent } from '../shared/analytics-progressbar/analytics-progressbar.component';
import { MyProfileComponent } from '../crowd-flow/my-profile/my-profile.component';
import { LaneAlignmentMixedComponent } from './lane-alignment-mixed/lane-alignment-mixed.component';
import { AssignTaskComponent } from './assign-task/assign-task.component';
import { DragDropDirective } from '../admin/lane-alignment-mixed/drag-drop.directive';
import { TaskAssignedComponent } from './task-assigned/task-assigned.component';
import { FooterComponent } from '../shared/footer/footer.component';
import { ShareulComponent } from './shareul/shareul.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'dashboard',
    pathMatch: 'full',
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'landing-page',
    component: LandingPageComponent
  },
  {
    path: 'custom-login',
    component: CustomLoginComponent,
    data: {
      breadcrumb: 'Custom-Login'
    }
  },
  {
    path: 'dashboard',
    component: DashboardComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'manager-table',
    component: ManagerTableComponent,
    data: {
      breadcrumb: 'Manager-table'
    }
  },
  {
    path: 'my-profile',
    component: MyProfileComponent,
    data: {
      breadcrumb: 'my-profile'
    }
  },
  {
    path: 'lane-alignment-mixed',
    component: LaneAlignmentMixedComponent,
    data: {
      breadcrumb: 'lane-alignment-mixed'
    }
  },
  {
    path: 'footer',
    component: FooterComponent,
    data: {
      breadcrumb: 'footer'
    }
  }
]


@NgModule({
  declarations: [
    UsersComponentComponent,
    UserCountCardComponent,
    ClientWorkflowComponent,
    AnalyticsProgressbarComponent,
    CreateClientComponent,
    MyProfileComponent,
    LaneAlignmentMixedComponent,
    AssignTaskComponent,
    DragDropDirective,
    TaskAssignedComponent,
    FooterComponent,
    ShareulComponent
  ],
  imports: [
    FormsModule,
    CommonModule,
    HttpClientModule,
    ReactiveFormsModule,
    SharedModule,
    MaterialModule,
    RouterModule.forChild(routes),
    NgxPermissionsModule.forChild(),
  ],
  exports: [RouterModule,]
})
export class AdminModule { }
