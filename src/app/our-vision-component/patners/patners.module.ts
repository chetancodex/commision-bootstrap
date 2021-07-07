import { SignUpModule } from '../../button/sign-up/sign-up.module';
import { LogInModule } from '../../button/log-in/log-in.module';
import { PatnersComponent } from './patners.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';



@NgModule({
  declarations: [PatnersComponent],
  imports: [
    CommonModule,
    LogInModule,
    SignUpModule
  ],
  exports:[
    PatnersComponent
  ]
})
export class PatnersModule { }
