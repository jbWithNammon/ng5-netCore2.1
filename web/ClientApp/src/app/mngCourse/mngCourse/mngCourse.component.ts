import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators,FormBuilder } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { MessageResource } from '../../shared/resources/message.resource';
import { MngCourseService } from '../mngCourse.service';
import { Router } from '@angular/router';
import { ICourse, ICategoryMangementModel,ISearchParameter,ISearchCondition,ICourseList } from '../../models/interfaces';
import { AppService } from '../../app.service';
import * as Enum from '../../models/constants';

@Component({
  selector: 'mngCourse',
  templateUrl: './mngCourse.component.html',
})
export class MngCourseComponent {
  txtCourseName: string;
  txtCategories: string;
  txtDateFrom: any;
  txtDateTo: any;
  courseList: ICourse[];
  categoriesList: ICategoryMangementModel[];
  languageId: string;
  searchParam: ISearchParameter = {};
  condtion: ISearchCondition = {};
  condtionList: ISearchCondition[] = [];
  totalTopic: ICourseList[];

  constructor(
    public message: MessageResource,
    private fb: FormBuilder,
    private service: MngCourseService,
    public router: Router,
    private app: AppService
  ) {
    this.app.obLanguageId
    .subscribe((value: string) => {
      this.languageId = value;
    });
   }

   ngOnInit(){
    this.searchCourse();
    this.getCategories();
    //this.getAllCourse();
    this.txtDateFrom = new Date().toISOString().substring(0, 10);
    this.txtDateTo = new Date().toISOString().substring(0, 10);
    
   }


   getAllCourse(){
    this.service.getAllCourses().subscribe( data => {
      this.courseList = data;
     });
   }
  
   getCategories(){
     this.service.getCategories().subscribe( data => {
      this.categoriesList = data;
     });
   }

   searchCourse(){
    this.setCondition();
    this.service.getSearchCourses(this.searchParam).subscribe( data => {
      if (data) {
        debugger;
        this.courseList = data.ResultList;
      }
     });
   }

   courseStructure(){
    this.router.navigate(['/CourseManagement/CourseStructure']);
   }

   setCondition() {
    this.condtion = {};
    if (this.txtCourseName) {
      this.condtion = {
        TableName: 'Course',
        FieldName: 'Name_L1',
        ParameterName: 'Name_L1',
        Value: this.txtCourseName,
        OperatorType: Enum.OperatorType.Like,
        JoinerType: '',
        LikePosition: Enum.LikePositionType.AroundWords
      }
      this.condtionList.push(this.condtion);

      this.condtion = {
        TableName: 'Course',
        FieldName: 'Name_L2',
        ParameterName: 'Name_L2',
        Value: this.txtCourseName,
        OperatorType: Enum.OperatorType.Like,
        JoinerType: Enum.JoinerType.Or,
        LikePosition: Enum.LikePositionType.AroundWords
      }
      this.condtionList.push(this.condtion);

      this.condtion = {
        TableName: 'Course',
        FieldName: 'Name_L3',
        ParameterName: 'Name_L3',
        Value: this.txtCourseName,
        OperatorType: Enum.OperatorType.Like,
        JoinerType: Enum.JoinerType.Or,
        LikePosition: Enum.LikePositionType.AroundWords
      }
      this.condtionList.push(this.condtion);
    }
    if (this.txtCategories) {
      this.condtion = {
        TableName: 'Course',
        FieldName: 'Name_L4',
        ParameterName: 'Name_L4',
        Value: this.txtCategories,
        OperatorType: Enum.OperatorType.Like,
        JoinerType: Enum.JoinerType.Or,
        LikePosition: Enum.LikePositionType.AroundWords
      }
      this.condtionList.push(this.condtion);
    }
    if (this.txtDateFrom) {
      this.condtion = {
        TableName: 'Course',
        FieldName: 'EffDate',
        ParameterName: 'EffDate',
        Value: this.txtDateFrom,
        OperatorType: Enum.OperatorType.GreaterEqual,
        JoinerType: Enum.JoinerType.And,
        LikePosition: ''
      }
      this.condtionList.push(this.condtion);
    }
    if (this.txtDateTo) {
      this.condtion = {
        TableName: 'Course',
        FieldName: 'ExpDate',
        ParameterName: 'ExpDate',
        Value: this.txtDateTo,
        OperatorType: Enum.OperatorType.LessEqual,
        JoinerType: Enum.JoinerType.And,
        LikePosition: ''
      }
      this.condtionList.push(this.condtion);
    }

    this.searchParam = {
      ConditionList: this.condtionList,
      SortTable: 'Course',
      SortColumn: 'ID',
      SortAscending: true,
      Page: 0,
      ItemsPerPage: 10
    }

  }
}
