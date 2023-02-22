import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from '../shared/login/login.component';
import { LandingPageComponent } from '../shared/landing-page/landing-page.component';
import { CustomLoginComponent } from '../shared/custom-login/custom-login.component';
import { QADashboardComponent } from './qa-dashboard/qa-dashboard.component';
import { AuthGuard } from '../auth.guard';
import { NgxPermissionsModule } from 'ngx-permissions';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { HttpClientModule } from '@angular/common/http';
import { SharedModule } from '../shared/shared.module';
import { MaterialModule } from '../shared/material/material.module';
import { Routes, RouterModule } from "@angular/router";
import { QueriesRequestsQaComponent } from './queries-requests-qa/queries-requests-qa.component';
import { AmazonCardPageComponent } from './reviews-page/amazon-card-page/amazon-card-page.component';
import { FooterComponent } from '../shared/footer/footer.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'qa-dashboard',
    pathMatch: 'full',
  },
  {
    path: 'qa-dashboard',
    component: QADashboardComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'queries-requests-qa',
    component: QueriesRequestsQaComponent,
    canActivate: [AuthGuard],
  },

  {
    path: 'amazon-card-page',
    component: AmazonCardPageComponent,
    canActivate: [AuthGuard],
  },

]


@NgModule({
  declarations: [ 
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
export class QaFlowModule { }
