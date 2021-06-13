import { PatnersModule } from './../../ourVisionComponent/patners/patners.module';
import { HorseImgModule } from 'src/app/about/horse-img/horse-img.module';
import { SmallTreeImgComponent } from './../../ourVisionComponent/small-tree-img/small-tree-img.component';

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OurVisionPageComponent } from './our-vision-page.component';
import { HeroModule } from 'src/app/ourVisionComponent/hero/hero.module';
import { HeroWrapperModule } from 'src/app/ourVisionComponent/hero-wrapper/hero-wrapper.module';
import { SmallTreeImgModule } from 'src/app/ourVisionComponent/small-tree-img/small-tree-img.module';





@NgModule({
  declarations: [OurVisionPageComponent],
  imports: [
    CommonModule,
    HeroModule,
    HeroWrapperModule,
    SmallTreeImgModule,
    HorseImgModule,
    PatnersModule


  ],
  exports:[
    OurVisionPageComponent
  ]
})
export class OurVisionPageModule { }
