import { PatnersModule } from '../../our-vision-component/patners/patners.module';
import { HorseImgModule } from 'src/app/about/horse-img/horse-img.module';
import { SmallTreeImgComponent } from '../../our-vision-component/small-tree-img/small-tree-img.component';

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OurVisionPageComponent } from './our-vision-page.component';
import { HeroModule } from 'src/app/our-vision-component/hero/hero.module';
import { HeroWrapperModule } from 'src/app/our-vision-component/hero-wrapper/hero-wrapper.module';
import { SmallTreeImgModule } from 'src/app/our-vision-component/small-tree-img/small-tree-img.module';





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
