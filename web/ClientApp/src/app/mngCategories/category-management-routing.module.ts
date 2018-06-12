import { NotFoundComponent } from '../shared/notFound/notFound.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuardService } from '../authentication/auth-guard.service';
import { CategoryManagementComponent } from './category-management/category-management.component';
import { CourseManagementComponent } from './course-management/course-management.component';

const layoutRoutes: Routes = [
  { path: '', component: CategoryManagementComponent},
  { path: ':id', component: CourseManagementComponent}
];

@NgModule({
  imports: [
    RouterModule.forChild(layoutRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class CategoryMangementRoutingModule {

}
