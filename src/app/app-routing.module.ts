import { ChangePasswordComponent } from './shared/change-password/change-password.component';
import { ManagerTaskpageComponent } from './manager-flow/manager-taskpage/manager-taskpage.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { NgxPermissionsGuard } from 'ngx-permissions';
import { DashboardComponent } from './admin/dashboard/dashboard.component';
import { LoginComponent } from './shared/login/login.component';
import { DefaultComponent } from './shared/default/default.component';
import { AuthGuard } from './auth.guard';
import { CustomLoginComponent } from './shared/custom-login/custom-login.component';
import { LandingPageComponent } from './shared/landing-page/landing-page.component';
import { AuthService } from './auth.service';
import { ManagerTableComponent } from './admin/manager-table/manager-table.component';
import { AutonomousVehicleComponent } from './admin/autonomous-vehicle/autonomous-vehicle.component';
import { CrowdTableComponent } from './admin/crowd-table/crowd-table.component';
import { DataAnalystTableComponent } from './admin/data-analyst-table/data-analyst-table.component';
import { SmeTableComponent } from './admin/sme-table/sme-table.component';
import { QATableComponent } from './admin/qa-table/qa-table.component';
import { ClientWorkflowComponent } from './admin/client-workflow/client-workflow.component';
import { SharedModule } from './shared/shared.module';
import { UsersComponentComponent } from './admin/users-component/users-component.component';
import { MyProfileComponent } from './crowd-flow/my-profile/my-profile.component';
import { LaneAlignmentMixedComponent } from './admin/lane-alignment-mixed/lane-alignment-mixed.component';
import { FooterComponent } from './shared/footer/footer.component';
import { ManagedTaskpageComponent } from './managed-user/managed-taskpage/managed-taskpage.component';
import { ManagedAutonomousComponent } from './managed-user/managed-autonomous/managed-autonomous.component';
import { ManagedUploadtaskComponent } from './managed-user/managed-uploadtask/managed-uploadtask.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'landing-page',
    pathMatch: 'full',
  },
  {
    path: 'landing-page',
    component: LandingPageComponent,
    data: {
      breadcrumb: 'landing-page'
    }
  },
  {
    path: 'login',
    component: LoginComponent,
    data: {
      breadcrumb: 'Login Page'
    }
  },
  {
    path: 'custom-login',
    component: CustomLoginComponent,

    data: {
      breadcrumb: 'Custom Login'
    }
  },
  {
    path: 'change-password',
    component :ChangePasswordComponent,
    data: {
      breadcrumb: 'change-password'
    }
  },

  {
    path: 'footer',
    component: FooterComponent,
    data: {
      breadcrumb: 'footer'
    }
  },
  {
    path: '',
    component: DefaultComponent,
    canActivate: [AuthGuard],
    data: {
      breadcrumb: 'Dashboard'
    },

    children: [
      {
        path: 'superadmin',
        canActivateChild: [NgxPermissionsGuard],
        data: {
          permissions: {
            only: ['superadmin'],
            redirectTo: "/login"
          },
        },
        loadChildren: () => import('./admin/admin.module').then(m => m.AdminModule),
      },
      {
        path: 'manageduser',
        canActivateChild: [NgxPermissionsGuard],
        data: {
          permissions: {
            only: ['manageduser'],
            redirectTo: "/login"
          },
        },
        loadChildren: () => import('./managed-user/managed-user.module').then(m => m.ManagedUser),
      },
      {
        path: 'managerflow',
        canActivateChild: [NgxPermissionsGuard],
        data: {
          permissions: {
            only: ['managerflow'],
            redirectTo: "/login"
          },
        },
        loadChildren: () => import('./manager-flow/manager-flow.module').then(m => m.ManagedFlow),
      },
      {
        path: 'crowdflow',
        canActivateChild: [NgxPermissionsGuard],
        data: {
          permissions: {
            only: ['crowdflow'],
            redirectTo: "/login"
          },
        },
        loadChildren: () => import('./crowd-flow/crowd-flow.module').then(m => m.CrowdFlowModule),

      },
      {
        path: 'QAflow',
        canActivateChild: [NgxPermissionsGuard],
        data: {
          permissions: {
            only: ['QAflow'],
            redirectTo: "/login"
          },
        },
        loadChildren: () => import('./QA/qa-flow.module').then(m => m.QaFlowModule),
      },
      {
        path: 'sme',
        canActivateChild: [NgxPermissionsGuard],
        data: {
          permissions: {
            only: ['sme'],
            redirectTo: "/login"
          },
        },
        loadChildren: () => import('./SME/sme-flow.module').then(m => m.SmeFlowModule),
      },



      {
        path: 'manager-table',
        component: ManagerTableComponent,
        data: {
          breadcrumb: 'Manager-table'
        }
      },
      {
        path: 'crowd-table',
        component: CrowdTableComponent,
        data: {
          breadcrumb: 'Crowd-table'
        }
      },
      {
        path: 'data-analyst-table',
        component: DataAnalystTableComponent,
        data: {
          breadcrumb: 'Data-analyst-table'
        }
      },
      {
        path: 'sme-table',
        component: SmeTableComponent,
        data: {
          breadcrumb: 'Data-analyst-table'
        }
      },
      {
        path: 'qa-table',
        component: QATableComponent,
        data: {
          breadcrumb: 'qa-table'
        }
      },

      {
        path: 'autonomous-vehicle/:clientId',
        component: AutonomousVehicleComponent,
        data: {
          breadcrumb: 'Autonomous-vehicle'
        }
      },
      {
        path: 'client-workflow',
        component: ClientWorkflowComponent,
        data: {
          breadcrumb: 'client-work'
        }
      },
      {
        path: 'users-component',
        component: UsersComponentComponent,
        data: {
          breadcrumb: 'users-component'
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
        path: 'lane-alignment-mixed/:taskId',
        component: LaneAlignmentMixedComponent,
        data: {
          breadcrumb: 'lane-alignment-mixed'
        }
      },

      {
        path: 'manager-taskpage',
        component: ManagerTaskpageComponent,
        data: {
          breadcrumb: 'manager-task'
        }
      },
      {
        path: 'managed-taskpage',
        component: ManagedTaskpageComponent,
      },
      {
        path: 'managed-uploadtask',
        component: ManagedUploadtaskComponent,
      },


    ]
  },
  { path: '**', redirectTo: '' }
];

@NgModule({
  declarations: [],
  imports: [CommonModule, RouterModule.forRoot(routes, { useHash: true }), SharedModule,],
  exports: [RouterModule],
  providers: [AuthService],

})
export class AppRoutingModule { }
