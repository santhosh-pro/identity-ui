import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TextInputComponent } from './input/text-input/text-input.component';
import { AppMaterialModule } from '../app-material.module';
import { ReactiveFormsModule } from '@angular/forms';
import { PasswordInputComponent } from './input/password-input/password-input.component';
import { ButtonComponent } from './output/button/button.component';
import { ExpandableComponent } from './output/expandable/expandable.component';
import { StepperComponent } from './output/stepper/stepper.component';
import { StepComponent } from './output/stepper/step/step.component';
import { CheckBoxComponent } from './input/check-box/check-box.component';
import { SelectComponent } from './input/select/select.component';
import { SliderComponent } from './input/slider/slider.component';
import { RadioGroupComponent } from './input/radio-group/radio-group.component';
import { RadioButtonComponent } from './input/radio-group/radio-button/radio-button.component';
import { SwitchComponent } from './input/switch/switch.component';
import { TableComponent } from './output/table/table.component';

@NgModule({
  declarations: [
    TextInputComponent, 
    PasswordInputComponent, 
    ButtonComponent, 
    ExpandableComponent, 
    StepperComponent, 
    StepComponent, 
    CheckBoxComponent, 
    SelectComponent, 
    SliderComponent, 
    RadioGroupComponent, 
    RadioButtonComponent, 
    SwitchComponent, 
    TableComponent],
  imports: [
    CommonModule,
    AppMaterialModule,
    ReactiveFormsModule
  ],
  exports: [
    TextInputComponent, 
    PasswordInputComponent, 
    ButtonComponent, 
    ExpandableComponent, 
    StepperComponent, 
    StepComponent, 
    CheckBoxComponent, 
    SelectComponent, 
    SliderComponent, 
    RadioGroupComponent, 
    RadioButtonComponent, 
    SwitchComponent, 
    TableComponent
  ]
})
export class ControlsModule { }
