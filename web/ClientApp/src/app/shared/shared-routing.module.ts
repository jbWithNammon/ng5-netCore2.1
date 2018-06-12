import { NotFoundComponent } from './notFound/notFound.component';
import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuardService } from '../authentication/auth-guard.service';

const sharedRoutes: Routes = [
  //{ path: 'Home', component:HomeComponent},
  //{ path: '**', redirectTo:'/PageNotFound'},
  //{ path:'PageNotFound', component:NotFoundComponent}
];

@NgModule({
  imports: [
    RouterModule.forChild(sharedRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class SharedRoutingModule { }