import {
  NgModule
} from '@angular/core';
import {
  RouterModule,
  Routes
} from '@angular/router';
import {
  HomeComponent
} from './home/home.component';
import {
  ResultComponent
} from './result/result.component';
import { ResultsComponent } from './results/results.component';

const routes: Routes = [{
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'result',
    component: ResultComponent
  },{
    path:'results',
    component:ResultsComponent
  },
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
