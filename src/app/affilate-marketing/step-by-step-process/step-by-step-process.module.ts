import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StepByStepProcessComponent } from './step-by-step-process.component';



@NgModule({
  declarations: [StepByStepProcessComponent],
  imports: [
    CommonModule
  ],
  exports:[StepByStepProcessComponent]
})
export class StepByStepProcessModule { }
