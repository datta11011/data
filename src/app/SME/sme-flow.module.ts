import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from "@angular/router";
import { LoginComponent } from '../shared/login/login.component';
import { LandingPageComponent } from '../shared/landing-page/landing-page.component';
import { CustomLoginComponent } from '../shared/custom-login/custom-login.component';
import { AuthGuard } from '../auth.guard';
import { NgxPermissionsModule } from 'ngx-permissions';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { SharedModule } from '../shared/shared.module';
import { HttpClientModule } from "@angular/common/http";
import { MaterialModule } from '../shared/material/material.module';
import { SMEDashboardComponent } from './sme-dashboard/sme-dashboard.component';
import { EmptyDashboardComponent } from './empty-dashboard/empty-dashboard.component';
import { AmazonTaskCardComponent } from './amazon-task-card/amazon-task-card.component';
import { QueriesCardComponent } from './queries-card/queries-card.component';
import { QueriesTasksComponent } from '../shared/cards/queries-tasks/queries-tasks.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'empty-dashboard',
    pathMatch: 'full',
  },
  {
    path: 'empty-dashboard',
    component: EmptyDashboardComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'sme-dashboard',
    component: SMEDashboardComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'amazon-task-card',
    component: AmazonTaskCardComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'queries-card',
    component: QueriesCardComponent,
    canActivate: [AuthGuard],
  },
]


@NgModule({
  declarations: [
  QueriesTasksComponent,

  ],
  imports: [
    FormsModule,
    CommonModule,
    HttpClientModule,
    ReactiveFormsModule,
    SharedModule,
    MaterialModule,
    RouterModule.forChild(routes),
    NgxPermissionsModule.forChild()
  ],
  exports: [RouterModule,]
})
export class SmeFlowModule { }