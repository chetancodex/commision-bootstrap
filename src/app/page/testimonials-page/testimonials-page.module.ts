import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TestimonialsPageComponent } from './testimonials-page.component';
import { AboutHeroModule } from 'src/app/about/about-hero/about-hero.module';



@NgModule({
  declarations: [TestimonialsPageComponent],
  imports: [
    CommonModule,
    AboutHeroModule
  ],
  exports:[TestimonialsPageComponent]
})
export class TestimonialsPageModule { }
