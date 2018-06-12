import { NotFoundComponent } from '../shared/notFound/notFound.component';
import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuardService } from '../authentication/auth-guard.service';

const layoutRoutes: Routes = [
  { path: '**', redirectTo:'/PageNotFound'},
  { path:'PageNotFound', component:NotFoundComponent}
];

@NgModule({
  imports: [
    RouterModule.forChild(layoutRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class SharedRoutingModule { }