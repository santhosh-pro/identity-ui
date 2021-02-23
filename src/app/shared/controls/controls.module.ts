import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TextInputComponent } from './input/text-input/text-input.component';
import { AppMaterialModule } from '../app-material.module';

@NgModule({
  declarations: [TextInputComponent],
  imports: [
    CommonModule,
    AppMaterialModule
  ],
  exports: [TextInputComponent]
})
export class ControlsModule { }
