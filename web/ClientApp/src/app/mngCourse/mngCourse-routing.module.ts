import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MngCourseComponent }    from './mngCourse/mngCourse.component';
import { MngCourseStructureComponent } from './mngCourseStructure/mngCourseStructure.component';
import { MngAddCourseComponent } from './mngAddCourse/mngAddCourse.component';
import { MngAddTargetComponent } from './mngAddTarget/mngAddTarget.component';
import { MngAddTopicComponent } from './mngCourseTopic/mngAddTopic.component';
import { Base64UploadComponent } from '../base64-upload/base64-upload.component';


const courseRoutes: Routes = [
  { path: '',  component: MngCourseComponent},
  { path: 'CourseStructure/:id',  component: MngCourseStructureComponent},
  { path: 'AddCourse',  component: MngAddCourseComponent},
  { path: 'AddTarget',  component: MngAddTargetComponent},
  { path: 'AddTopic',  component: MngAddTopicComponent}
];

@NgModule({
  imports: [
    RouterModule.forChild(courseRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class MngCourseRoutingModule { }