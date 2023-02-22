import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from "@angular/core";
import { CommonModule } from "@angular/common";
import { DashboardComponent } from "../admin/dashboard/dashboard.component";
import { RouterModule } from "@angular/router";
import { ReactiveFormsModule, FormsModule, FormGroup } from "@angular/forms";
import { NgxPermissionsModule } from "ngx-permissions";
import { MatExpansionModule } from "@angular/material/expansion";
import { DetailCardComponent } from "./cards/detail-card/detail-card.component";
import { LoginFooterComponent } from "./login-footer/login-footer.component";
import { ProgramsTimespentComponent } from "./cards/programs-timespent/programs-timespent.component";
import { CrowdTaskComponent } from "./cards/crowd-task/crowd-task.component";
import { TimespentSmeComponent } from "./cards/timespent-sme/timespent-sme.component";
import { SmeProfileComponent } from "./cards/sme-profile/sme-profile.component";
import { LandingPageComponent } from "./landing-page/landing-page.component";
import { AnalyticsProgressbarComponent } from "./analytics-progressbar/analytics-progressbar.component";
import { UserCardComponent } from "./cards/user-card/user-card.component";
import { ClientCardComponent } from "./cards/client-card/client-card.component";
import { OnboardedCardComponent } from "./cards/onboarded-card/onboarded-card.component";
import { ProfileCardComponent } from "./cards/profile-card/profile-card.component";
import { MaterialModule } from "./material/material.module";
import { CreateClientComponent } from "./cards/create-client/create-client.component";
import { TaskProgramComponent } from "../admin/task-program/task-program.component";
import { DashboardCrowdComponent } from "../crowd-flow/dashboard-crowd/dashboard-crowd.component";
import { CrowdProfileComponent } from "./cards/crowd-profile/crowd-profile.component";
import { UserCountCardComponent } from "../admin/user-count-card/user-count-card.component";
import { AddUserComponent } from "../admin/add-user/add-user.component";
import { ChangePasswordComponent } from './change-password/change-password.component';
import { ConfirmPopupComponent } from './confirm-popup/confirm-popup.component';
@NgModule({
  declarations: [
    DashboardComponent,
    DashboardCrowdComponent,
    DetailCardComponent,
    LoginFooterComponent,
    ProgramsTimespentComponent,
    CrowdTaskComponent,
    TimespentSmeComponent,
    SmeProfileComponent,
    UserCardComponent,
    ClientCardComponent,
    OnboardedCardComponent,
    ProfileCardComponent,
    LandingPageComponent,
    TaskProgramComponent,
    CrowdProfileComponent,
    AddUserComponent,
    ChangePasswordComponent,
    ConfirmPopupComponent,
    
  ],
  imports: [
    CommonModule,
    MaterialModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
    MatExpansionModule,
    NgxPermissionsModule.forChild(),
  ],
  exports: [
    DashboardComponent,
    DashboardCrowdComponent
  ],
  entryComponents: [

  ],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ],
})
export class SharedModule { }
