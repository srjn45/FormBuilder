import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SpFormBuilderComponent } from './sp-form-builder/sp-form-builder.component';

import { SpMatDependencyModule } from "./sp-mat-dependency/sp-mat-dependency.module";

@NgModule({
  imports: [
    CommonModule,
    SpMatDependencyModule
  ],
  declarations: [SpFormBuilderComponent],
  exports: [
    SpFormBuilderComponent,
    SpMatDependencyModule
  ]
})
export class SpFormBuilderModule { }
