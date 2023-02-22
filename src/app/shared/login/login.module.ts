import { NgModule, CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
// import {LoginRoutingModule } from './login-routing/login-routing.module';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule
    // LoginRoutingModule
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA],
})
export class LoginModule { }
