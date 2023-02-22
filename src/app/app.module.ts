import { NgModule ,NO_ERRORS_SCHEMA} from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CommonModule } from '@angular/common'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CustomLoginComponent } from './shared/custom-login/custom-login.component';
import { DefaultComponent } from './shared/default/default.component';
import { topNavComponent } from './shared/top-nav/top-nav.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgxPermissionsModule } from 'ngx-permissions';
import { MaterialModule } from './shared/material/material.module';
import { SharedModule } from './shared/shared.module';
import { LoadingInterceptor } from './shared/interceptor/loading.interceptor';
import { SpinnerComponent } from './shared/spinner/spinner.component';
import { RouterModule } from '@angular/router';
import { ClientWorkflowComponent } from './admin/client-workflow/client-workflow.component';
import { AnalyticsProgressbarComponent } from './shared/analytics-progressbar/analytics-progressbar.component';
import { TaskProgramComponent } from './admin/task-program/task-program.component';
import {ManageClientComponent} from './admin/manage-client/manage-client.component'
import { EditClientComponent } from './admin/edit-client/edit-client.component';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatButtonModule } from '@angular/material/button';
import { AutonomousVehicleComponent } from './admin/autonomous-vehicle/autonomous-vehicle.component';
import { MatTooltipModule } from '@angular/material/tooltip';
import { FooterComponent } from './shared/footer/footer.component';
import { MatSelectModule } from '@angular/material/select';
import { MatFormFieldModule } from '@angular/material/form-field';
// import { NgxMatSelectSearchModule } from 'ngx-mat-select-search';
@NgModule({
  declarations: [
    AppComponent,
    DefaultComponent,
    topNavComponent,
    CustomLoginComponent,
    SpinnerComponent,
    ManageClientComponent,
    EditClientComponent,
    AutonomousVehicleComponent,
  ],
  imports: [
    CommonModule,
    BrowserModule.withServerTransition({ appId: 'ng-cli-universal' }),
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    SharedModule,
    NgxPermissionsModule.forRoot(),
    AppRoutingModule,
    RouterModule,
    BrowserAnimationsModule,
    MaterialModule,
    MatCheckboxModule,
    MatButtonModule,
    MatTooltipModule,
    MatSelectModule,
    MatFormFieldModule
    // NgxMatSelectSearchModule
  ],
  providers: [{
    provide: HTTP_INTERCEPTORS,
    useClass: LoadingInterceptor,
    multi: true,
  },],
  bootstrap: [AppComponent]
})
export class AppModule { }
