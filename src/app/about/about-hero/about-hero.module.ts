import { HeaderModule } from './../../header/header.module';
import { AboutHeroComponent } from './about-hero.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';



@NgModule({
  declarations: [AboutHeroComponent],
  imports: [
    CommonModule,
    HeaderModule
  ],
  exports:[
    AboutHeroComponent
  ]
})
export class AboutHeroModule { }
