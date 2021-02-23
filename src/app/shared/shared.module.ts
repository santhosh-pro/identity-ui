import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ControlsModule } from './controls/controls.module';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    ControlsModule,
  ],
  exports:[
    ControlsModule,
  ]
})
export class SharedModule { }
