import { LogInComponent } from './log-in.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';



@NgModule({
  declarations: [LogInComponent],
  imports: [
    CommonModule
  ],
  exports:[
    LogInComponent
  ]
})
export class LogInModule { }
