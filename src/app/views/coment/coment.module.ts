import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ComentRoutingModule } from './coment-routing.module';
import { ComentComponent } from './coment.component';
import { AddComentComponent } from './add-coment/add-coment.component';


@NgModule({
  declarations: [
    ComentComponent,
    AddComentComponent
  ],
  imports: [
    CommonModule,
    ComentRoutingModule
  ]
})
export class ComentModule { }
