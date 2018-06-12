import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators,FormBuilder } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { MessageResource } from '../../shared/resources/message.resource';
import { MngCourseService } from '../mngCourse.service';
import { Router,ActivatedRoute } from '@angular/router';
import { ICourse, ICategoryMangementModel,IEmployee } from '../../models/interfaces';
import { AppService } from '../../app.service';
import * as Enum from '../../models/constants';
import { MatDialog } from '@angular/material';
import { DialogComponent } from '../../shared/dialog/dialog/dialog.component';
import { DialogMngCourseComponent } from '../../shared/dialog/dialogMngCourse/dialogMngCourse.component';

@Component({
  selector: 'mngAddTarget',
  templateUrl: './mngAddTarget.component.html',
})
export class MngAddTargetComponent {
  courseInsert: ICourse;
  categoriesList: ICategoryMangementModel[];
  activeIDList: string[];
  InActiveIDList: string[];
  targetList: IEmployee[];
  constructor(
    public message: MessageResource,
    private fb: FormBuilder,
    private service: MngCourseService,
    public router: Router,
    private app: AppService,
    public dialog: MatDialog
  ) {}

   ngOnInit(){
    this.courseInsert = {};
    this.getCategories();
    this.courseInsert.EffDate = new Date().toISOString().substring(0, 10);
    this.courseInsert.ExpDate = new Date().toISOString().substring(0, 10);
    this.targetList = [];
     //this.app.getLocalStorage('appLang');
   }

   addTarget(){
    this.openDialogWarning("Add target");
   }

   getCategories(){
     this.service.getCategories().subscribe( data => {
      this.categoriesList = data;
     });
   }

   nextPage(){
    this.router.navigate(['/CourseManagement/AddTopic']);
   }

   prevPage(){
    this.router.navigate(['/CourseManagement/AddCourse']);
   }

   openDialogWarning(dialogTitle): void {
    let dialogRef = this.dialog.open(DialogMngCourseComponent, {
      width: '1000px',
      autoFocus: false,
      disableClose: true,
      data: { dialogType: 'addTargetCourse', dialogTitle: dialogTitle ,targetList:this.targetList}
    });
  }
}
