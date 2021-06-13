import { HeroWrapperComponent } from './hero-wrapper.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';



@NgModule({
  declarations: [HeroWrapperComponent],
  imports: [
    CommonModule
  ],
  exports:[HeroWrapperComponent]
})
export class HeroWrapperModule { }
