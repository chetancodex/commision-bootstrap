
import { HeroComponent } from 'src/app/ourVisionComponent/hero/hero.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from 'src/app/header/header.component';
import { HeaderModule } from 'src/app/header/header.module';
;



@NgModule({
  declarations: [HeroComponent],
  imports: [
    CommonModule,
    HeaderModule
  ],
  exports:[
    HeroComponent
  ]
})
export class HeroModule { }
