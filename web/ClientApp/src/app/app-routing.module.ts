import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SelectivePreloadingStrategy } from './selective-preloading-strategy';
import { CanDeactivateGuard } from './can-deactivate-guard.service';
import { AuthGuardService } from './authentication/auth-guard.service';
import { NotFoundComponent } from './shared/notFound/notFound.component';



const appRoutes: Routes = [  
  { path: '',   redirectTo: 'app/usrHome/usrHome.module#UsrHomeModule', pathMatch: 'full'},
  {
    path: 'Login',
    loadChildren: 'app/authentication/auth.module#AuthModule'
  },
  {
    path: 'Home',
    loadChildren: 'app/usrHome/usrHome.module#UsrHomeModule',
    canActivate:[AuthGuardService]
  },
  {
    path: 'CourseManagement',
    loadChildren: 'app/mngCourse/mngCourse.module#MngCourseModule',
    canActivate:[AuthGuardService]
  },
  {
    path: 'CourseStructure/:id',
    loadChildren: 'app/mngCourse/mngCourse.module#MngCourseModule',
    canActivate:[AuthGuardService]
  },
  {
    path: 'Other',
    loadChildren: 'app/other/other.module#OtherModule',
    canActivate:[AuthGuardService]
  },
  {
  path: 'CategoryManagement',
  loadChildren: 'app/mngCategories/category-management.module#CategoryManagementModule',
  canActivate: [AuthGuardService]
  },
  { path: '**', redirectTo:'/PageNotFound'},
  { path:'PageNotFound', component:NotFoundComponent}
];

@NgModule({
  imports: [
    RouterModule.forRoot(
      appRoutes,
      {
        enableTracing: true,
        preloadingStrategy: SelectivePreloadingStrategy,
      }
    )
  ],
  exports: [
    RouterModule
  ],
  providers: [
     SelectivePreloadingStrategy
  ]
})
export class AppRoutingModule { }