import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { CategoryManagementService } from './category-management.service';
import { CategoryMangementRoutingModule } from './category-management-routing.module';
import { CategoryManagementComponent } from './category-management/category-management.component';
import { CourseManagementComponent } from './course-management/course-management.component';

@NgModule({
  imports: [
    CommonModule,
    CategoryMangementRoutingModule,
    FormsModule
  ],
  declarations: [CategoryManagementComponent, CourseManagementComponent],
  providers: [CategoryManagementService]
})
export class CategoryManagementModule { }
