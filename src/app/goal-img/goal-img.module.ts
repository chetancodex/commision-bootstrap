import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GoalImgComponent } from './goal-img.component';



@NgModule({
  declarations: [
    GoalImgComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[
    GoalImgComponent
  ]
})
export class GoalImgModule { }
