import { NgModule } from '@angular/core';
import { SharedModule } from '../../shared';


import { AdminRoutingModule, COMPONENTS } from './admin-routing.module';



@NgModule({
  declarations: [
   ...COMPONENTS
  ],
  imports: [
    SharedModule,
    AdminRoutingModule,
   
  ]
})
export class AdminModule { }
