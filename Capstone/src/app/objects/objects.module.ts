import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AssignedComponent } from './assigned/assigned.component';
import {  MatFormFieldModule, MatInputModule } from '@angular/material';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
@NgModule({
  declarations: [ AssignedComponent],
  imports: [
  MatFormFieldModule,
  MatInputModule,
  ReactiveFormsModule,
  FormsModule,
    CommonModule
  ],
  exports:[
    AssignedComponent
  ]
})
export class ObjectsModule { }
