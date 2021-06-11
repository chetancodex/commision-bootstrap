import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutPageComponent } from './page/about-page/about-page.component';
import { HomePageComponent } from './page/home-page/home-page.component';


const routes: Routes = [

  {
    path:'',
    component: HomePageComponent
  },
  {
    path: 'about',
    component:AboutPageComponent

  },
  {
    path:'**',
    redirectTo:''
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
