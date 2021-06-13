import { SignUpComponent } from './sign-up.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';



@NgModule({
  declarations: [SignUpComponent],
  imports: [
    CommonModule
  ],
  exports:[
    SignUpComponent
  ]
})
export class SignUpModule { }
