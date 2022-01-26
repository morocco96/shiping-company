import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {
    HomeComponent, 
    RegisterComponent,
    SignInComponent, 
    DashboardComponent,
    DetailsComponent
  } from './components';

  export const COMPONENTS:Array<any> = [
    HomeComponent, 
    RegisterComponent,
    SignInComponent, 
    DashboardComponent,
    DetailsComponent
  ]


const routes: Routes = [
  {
    path: '',
    redirectTo:'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path:'register',
    component:RegisterComponent
  },
  {
    path: 'sign-in',
    component: SignInComponent
  },
  {
    path: 'details',
    component: DetailsComponent,
    children: [
      {
        path:'',
        redirectTo: 'dashboard',
        pathMatch: 'full'
      },
      {
        path: 'dashboard',
        component: DashboardComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
