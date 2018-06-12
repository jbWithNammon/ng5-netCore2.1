import { NgModule }       from '@angular/core';
import { CommonModule }   from '@angular/common';
import { FormsModule,ReactiveFormsModule }    from '@angular/forms';

import { SharedService } from './shared.service';
import { AppService } from '../app.service';
import { SharedRoutingModule } from './shared-routing.module';
import { NotFoundComponent } from './notFound/notFound.component';
import { NumPadDirective } from '../shared/directive/numpad.directive';
import { NumPadDialog } from '../shared/directive/dialog/numpad.component.dialog';
import { MatDialogModule,MatButtonModule,MatDatepickerModule,MatNativeDateModule } from '@angular/material';
import { DialogComponent } from '../shared/dialog/dialog/dialog.component';
import { DialogModule } from '../shared/dialog/dialog.module';
import { DragScrollDirective } from './directive/dragscroll.directive';
import { DivDragScrollDirective } from './directive/divdragscroll.directive';
import { SubDropDownDirective } from './directive/subdropdown.directive';
import { DialogMngCourseComponent } from '../shared/dialog/dialogMngCourse/dialogMngCourse.component';
import { LanguagePipe } from '../shared/pipe/languagePipe';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,    
    SharedRoutingModule,
    MatDialogModule,
    MatButtonModule,
    ReactiveFormsModule,
    DialogModule,
    MatDatepickerModule,
    MatNativeDateModule
  ],
  declarations: [
    NotFoundComponent,
    NumPadDirective,
    NumPadDialog,
    DialogComponent,
    DialogMngCourseComponent,
    DragScrollDirective,
    DivDragScrollDirective,
    SubDropDownDirective,
    LanguagePipe
  ],entryComponents: [
    NumPadDialog,
    DialogComponent,
    DialogMngCourseComponent,
  ],
  providers: [SharedService],
  exports:[NumPadDirective,
    DragScrollDirective,DivDragScrollDirective,SubDropDownDirective,LanguagePipe]
})
export class SharedModule {}