import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators,FormBuilder } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { MessageResource } from '../../shared/resources/message.resource';
import { MngCourseService } from '../mngCourse.service';
import { Router,ActivatedRoute } from '@angular/router';
import { ICourseList, ICategoryMangementModel, IMediaType,ISearchParameter ,ISearchCondition} from '../../models/interfaces';
import { AppService } from '../../app.service';
import * as Enum from '../../models/constants';
import { MatDialog } from '@angular/material';
import { DialogComponent } from '../../shared/dialog/dialog/dialog.component';


@Component({
  selector: 'mngCourseStructure',
  templateUrl: './mngCourseStructure.component.html',
})
export class MngCourseStructureComponent {
  courseList: ICourseList[];
  mediaTypeList: IMediaType[];
  courseId: string;
  mediaTypeSelected:IMediaType;
  oldMediaTypeID: string;
  searchParam: ISearchParameter = {};
  condtion: ISearchCondition = {};
  condtionList: ISearchCondition[] = [];
  languageId: string;
  constructor(
    public message: MessageResource,
    private fb: FormBuilder,
    private service: MngCourseService,
    public router: Router,
    private app: AppService,
    private routeAct: ActivatedRoute,
    public dialog: MatDialog
  ) {
    this.app.obLanguageId
    .subscribe((value: string) => {
      this.languageId = value;
    });
   }

   ngOnInit(){
     
     this.courseId = this.routeAct.snapshot.paramMap.get('id');
     this.getCourseList();
     this.getMediaTypeList();

   }


   getCourseList(){
    this.setCourseListCondition();
    this.service.getCourseList(this.searchParam).subscribe( data => {
      debugger;
      this.courseList = data.ResultList;
     });
   }

   getMediaTypeList(){
    this.service.getMedaiTypeList().subscribe( data => {
      this.mediaTypeList = data;
     });
   }

   getCourseContent(CourseListID){
    this.setCourseContentCondition(CourseListID);
    this.service.getCourseContentByID(this.searchParam).subscribe( data => {
      debugger;
      this.courseList = data.ResultList;
     });
     this.openDialogWarning("Login สำเร็จ");
   }

   onMediaTypeSelect(newMediaTypeID,courseListID){
     debugger;
    if(this.oldMediaTypeID != newMediaTypeID){
      this.service.getCourseContent(courseListID).subscribe( data => {
        if(data){
          console.log("yes");
        }
        else{
          console.log("no");
        }
      });
    }
    else{
      console.log("no");
    }
   }

   getOldMediatypeID(oldMediatypeID){

    this.oldMediaTypeID = oldMediatypeID;
   
  }

  setCourseListCondition() {
    this.condtion = {};
    debugger;
    if (this.courseId) {
      this.condtion = {
        TableName: 'CourseList',
        FieldName: 'CourseID',
        ParameterName: 'CourseID',
        Value: this.courseId,
        OperatorType: Enum.OperatorType.Equal,
        JoinerType: '',
        LikePosition: ''
      }
      this.condtionList.push(this.condtion);
    }
      this.condtion = {
        TableName: 'CourseList',
        FieldName: 'IsActive',
        ParameterName: 'IsActive',
        Value: '1',
        OperatorType: Enum.OperatorType.Equal,
        JoinerType: Enum.JoinerType.And,
        LikePosition: ''
      }
      this.condtionList.push(this.condtion);

    this.searchParam = {
      ConditionList: this.condtionList,
      SortTable: 'CourseList',
      SortColumn: 'TopicSeq',
      SortAscending: true,
      Page: 0,
      ItemsPerPage: 10
    }

  }

  setCourseContentCondition(CourseListID) {
    this.condtion = {};
    debugger;
    if (this.courseId) {
      this.condtion = {
        TableName: 'CourseContent',
        FieldName: 'CourseListID',
        ParameterName: 'CourseListID',
        Value: CourseListID,
        OperatorType: Enum.OperatorType.Equal,
        JoinerType: '',
        LikePosition: ''
      }
      this.condtionList.push(this.condtion);
    }
      this.condtion = {
        TableName: 'CourseContent',
        FieldName: 'IsActive',
        ParameterName: 'IsActive',
        Value: '1',
        OperatorType: Enum.OperatorType.Equal,
        JoinerType: Enum.JoinerType.And,
        LikePosition: ''
      }
      this.condtionList.push(this.condtion);

    this.searchParam = {
      ConditionList: this.condtionList,
      SortTable: 'CourseContent',
      SortColumn: '',
      SortAscending: true,
      Page: 0,
      ItemsPerPage: 10
    }

  }

  openDialogWarning(dialogTitle): void {
    let dialogRef = this.dialog.open(DialogComponent, {
      width: '250px',
      autoFocus: false,
      data: { dialogType: 'alert', dialogTitle: dialogTitle }
    });
  }
}
