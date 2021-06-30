import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LifeAtVcPageComponent } from './life-at-vc-page.component';
import { AboutHeroModule } from 'src/app/about/about-hero/about-hero.module';



@NgModule({
  declarations: [LifeAtVcPageComponent],
  imports: [
    CommonModule,
    AboutHeroModule
  ],
  exports:[LifeAtVcPageComponent]
})
export class LifeAtVcPageModule { }
