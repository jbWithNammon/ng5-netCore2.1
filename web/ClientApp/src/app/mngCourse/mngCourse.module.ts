import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MngCourseComponent } from './mngCourse/mngCourse.component';
import { MngCourseRoutingModule } from './mngCourse-routing.module';
import { FormsModule,ReactiveFormsModule  } from '@angular/forms';
import { SharedModule } from '../shared/shared.module';
import { MngCourseService } from './mngCourse.service';
import { MngCourseStructureComponent } from './mngCourseStructure/mngCourseStructure.component';
import { MngAddCourseComponent } from './mngAddCourse/mngAddCourse.component';
import { MngAddTargetComponent } from './mngAddTarget/mngAddTarget.component';
import { MngAddTopicComponent } from './mngCourseTopic/mngAddTopic.component';
// import { FileUploadModule } from 'ng2-file-upload';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MngCourseRoutingModule,
    SharedModule
    // FileUploadModule

  ],
  declarations: [MngCourseComponent,
    MngCourseStructureComponent,
    MngAddCourseComponent,
    MngAddTargetComponent,
    MngAddTopicComponent],
  providers: [MngCourseService]
})
export class MngCourseModule { }
