import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthRoutingModule } from './auth-routing.module';
import { AuthComponent } from './auth.component';
import { LoginComponent } from './pages/login/login.component';
import { CardModule, ButtonModule, GridModule, FormModule } from '@coreui/angular';
import { IconModule } from '@coreui/icons-angular';


@NgModule({
  declarations: [
    AuthComponent,
    LoginComponent
  ],
  imports: [
    CommonModule,
    AuthRoutingModule,

    
    CardModule,
    ButtonModule,
    GridModule,
    IconModule,
    FormModule
  
  ]
})
export class AuthModule { }
