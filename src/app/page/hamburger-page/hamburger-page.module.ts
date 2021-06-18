import { HamburgerPageComponent } from './hamburger-page.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderModule } from 'src/app/header/header.module';



@NgModule({
  declarations: [HamburgerPageComponent],
  imports: [
    CommonModule,
    HeaderModule
  ],
  exports:[HamburgerPageComponent]
})
export class HamburgerPageModule { }
