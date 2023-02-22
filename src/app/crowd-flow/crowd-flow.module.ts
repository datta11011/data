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
import { DashboardCrowdComponent } from './dashboard-crowd/dashboard-crowd.component';
import { FaceDetectionComponent } from './face-detection/face-detection.component';
import { FestiveDataComponent } from './festive-data/festive-data.component';
import { FinalDashboardComponent } from './final-dashboard/final-dashboard.component';
import { FinalDashboardCrowdComponent } from './final-dashboard-crowd/final-dashboard-crowd.component';
import { InstructionsPageComponent } from './instructions-page/instructions-page.component';
import { MyProfileComponent } from './my-profile/my-profile.component';
import { RiskAssessmentComponent } from './risk-assessment/risk-assessment.component';
import { SpeechCollectionComponent } from './speech-collection/speech-collection.component';
import { TaskListComponent } from './task-list/task-list.component';
const routes: Routes = [
  {
    path: '',
    redirectTo: 'dashboard-crowd',
    pathMatch: 'full',
  },
  {
    path: 'dashboard-crowd',
    component: DashboardCrowdComponent,
    canActivate: [AuthGuard],
  }, // visit home only if authenticated
  {
    path: 'face-detection',
    component: FaceDetectionComponent  
  },
  {
    path: 'festive-data',
    component: FestiveDataComponent  
  },
  // {
  //   path: 'final-dashboard',
  //   component: FinalDashboardComponent  
  // },
  {
    path: 'final-dashboard-crowd',
    component: FinalDashboardCrowdComponent  
  },
  {
    path: 'instructions-page',
    component: InstructionsPageComponent  
  },
  {
    path: 'my-profile',
    component: MyProfileComponent  
  },
  {
    path: 'risk-assessment',
    component: RiskAssessmentComponent  
   },
   {
    path: 'speech-collection',
    component: SpeechCollectionComponent  
  },
  {
    path: 'task-list',
    component: TaskListComponent  
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
export class CrowdFlowModule { }
