import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MngUserComponent }     from './mngUser/mngUser.component';

const homeRoutes: Routes = [
  { path: '',  component: MngUserComponent},
];

@NgModule({
  imports: [
    RouterModule.forChild(homeRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class MngUserRoutingModule { }
