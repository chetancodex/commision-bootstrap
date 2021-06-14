import { HamburgerPageComponent } from './hamburger-page.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';



@NgModule({
  declarations: [HamburgerPageComponent],
  imports: [
    CommonModule
  ],
  exports:[HamburgerPageComponent]
})
export class HamburgerPageModule { }
