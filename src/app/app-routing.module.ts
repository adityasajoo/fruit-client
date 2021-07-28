import {  NgModule} from '@angular/core';
import { RouterModule, Routes} from '@angular/router';
import { ErrorComponent } from './error/error.component';
import {  HomeComponent} from './home/home.component';

import { ResultsComponent } from './results/results.component';
import { TestComponent } from './test/test.component';


const routes: Routes = [ {
  path: '',
  redirectTo: '/home',
  pathMatch: 'full',
},{
    path: 'home',
    component: HomeComponent
  },
{
    path:'results',
    component:ResultsComponent
  },{
    path:'test',
    component:TestComponent 
  },{
    path:'error',
    component:ErrorComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
