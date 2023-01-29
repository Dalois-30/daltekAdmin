import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserRoutingModule } from './user-routing.module';
import { UserComponent } from './user.component';
import { AddUserComponent } from './add-user/add-user.component';
import { UserImageComponent } from './user-image/user-image.component';
import { ShareModule } from '../../share/share/share.module';
import { AvatarModule } from '@coreui/angular';
import { Ng2SmartTableModule } from 'ng2-smart-table';


@NgModule({
  declarations: [
    UserComponent,
    AddUserComponent,
    UserImageComponent
  ],
  imports: [
    CommonModule,
    UserRoutingModule,
    AvatarModule,
    ShareModule,
    // Ng2SmartTableModule
  ]
})
export class UserModule { }
