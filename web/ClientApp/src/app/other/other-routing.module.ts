import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OtherComponent }    from './other/other.component';


const otherRoutes: Routes = [
  { path: '',  component: OtherComponent}
];

@NgModule({
  imports: [
    RouterModule.forChild(otherRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class OtherRoutingModule { }