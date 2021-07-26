import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LeadGenrationPageComponent } from './lead-genration-page.component';
import { LeadGenrationHeroSectionModule } from 'src/app/lead-genration-hero-section/lead-genration-hero-section.module';
import { HeaderModule } from 'src/app/header/header.module';
import { GoalSectionModule } from 'src/app/goal-section/goal-section.module';
import { GoalImgModule } from 'src/app/goal-img/goal-img.module';
import { JourneySectionModule } from 'src/app/journey-section/journey-section.module';
import { JourneyImgModule } from 'src/app/journey-img/journey-img.module';
import { QualifiedSectionModule } from 'src/app/qualified-section/qualified-section.module';
import { PaginationSectionModule } from 'src/app/pagination-section/pagination-section.module';



@NgModule({
  declarations: [
    LeadGenrationPageComponent
  ],
  imports: [
    CommonModule,
    HeaderModule,
    LeadGenrationHeroSectionModule,
    GoalSectionModule,
    GoalImgModule,
    JourneySectionModule,
    JourneyImgModule,
    QualifiedSectionModule,
    PaginationSectionModule
  ],
  exports:[
    LeadGenrationPageComponent
  ]
})
export class LeadGenrationPageModule { }
