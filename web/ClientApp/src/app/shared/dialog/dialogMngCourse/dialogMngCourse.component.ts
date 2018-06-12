import { Component, OnInit , Inject,Renderer2,ViewEncapsulation} from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from "@angular/material";
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { FormBuilder } from '@angular/forms';
import { FormsModule,ReactiveFormsModule  } from '@angular/forms';
import { MessageResource } from '../../resources/message.resource';
import { DialogService } from '../dialog.service';
import { ICategoryMangementModel,IEmployee, ISearchParameter, ISearchCondition, IWorkExperience, IDepartment, IDivision, IPosition } from '../../../models/interfaces';
import * as Enum from '../../../models/constants';

@Component({
  selector: 'app-dialogMngCourse',
  templateUrl: './dialogMngCourse.component.html',
  styleUrls: ['./dialogMngCourse.component.css']
})
export class DialogMngCourseComponent implements OnInit {

    searchParam: ISearchParameter = {};
    condtion: ISearchCondition = {};
    condtionList: ISearchCondition[] = [];
    //addTarget variable
    departmentSelected: string;
    divisionSelected: string;
    positionSelected: string;
    workExpSelected: string;
    departmentList: IDepartment[];
    divisionList: IDivision[];
    positionList: IPosition[];
    workExpList: IWorkExperience[];
    empID: string;
    name: string;
    selectedList: IEmployee[];
    targetList: IEmployee[];


    constructor(private service: DialogService,
        public dialogRef: MatDialogRef<DialogMngCourseComponent>,
        @Inject(MAT_DIALOG_DATA) public data: any,public message: MessageResource
    ) {}
    result: boolean;

    ngOnInit() {
      if(this.data.dialogType == 'addTargetCourse'){
        this.getDepartment();
        this.getDivision();
        this.getPosition();
        this.getWorkExp();
        this.searchTargetCourse();
      }
    }

    updateTargetCourseList(){
      this.dialogRef.close(this.selectedList);
    }

    closeDialog() {
      this.dialogRef.close();
    }

    searchTargetCourse(){
      this.setTargetCourseCondition();
      this.service.getTargetCourse(this.searchParam).subscribe( data => {
        if (data) {
          this.targetList = data.ResultList;
        }
       });
    }

    getDepartment(){
      this.setDepartmentCondition();
      this.service.getDepartment(this.searchParam).subscribe( data => {
        if (data) {
          this.departmentList = data.ResultList;
        }
       });
    }
    getDivision(){
      this.setDivisionCondition();
      this.service.getDivision(this.searchParam).subscribe( data => {
        if (data) {
          this.divisionList = data.ResultList;
        }
       });
    }
    getPosition(){
      this.setPositionCondition();
      this.service.getPosition(this.searchParam).subscribe( data => {
        if (data) {
          this.positionList = data.ResultList;
        }
       });
    }
    getWorkExp(){
      this.setWorkExpCondition();
      this.service.getWorkExp(this.searchParam).subscribe( data => {
        if (data) {
          this.workExpList = data.ResultList;
        }
       });
    }


    checkValue(event: any){
      debugger;
      console.log(event);
    }
    setTargetCourseCondition() {
      this.condtion = {};
      this.condtionList = [];
      this.searchParam = {};

      if (this.departmentSelected) {
        this.condtion = {
          TableName: 'Employee',
          FieldName: 'DeptID',
          ParameterName: 'DeptID',
          Value: this.departmentSelected,
          OperatorType: Enum.OperatorType.Equal,
          JoinerType: '',
          LikePosition: ''
        }
        this.condtionList.push(this.condtion);
      }
      if (this.divisionSelected) {
        this.condtion = {
          TableName: 'Employee',
          FieldName: 'DivID',
          ParameterName: 'DivID',
          Value: this.divisionSelected,
          OperatorType: Enum.OperatorType.Equal,
          JoinerType: Enum.JoinerType.And,
          LikePosition: ''
        }
        this.condtionList.push(this.condtion);
      }
      if (this.positionSelected) {
        this.condtion = {
          TableName: 'Employee',
          FieldName: 'PositionID',
          ParameterName: 'PositionID',
          Value: this.positionSelected,
          OperatorType: Enum.OperatorType.Equal,
          JoinerType: Enum.JoinerType.And,
          LikePosition: ''
        }
        this.condtionList.push(this.condtion);
      }
      if (this.empID) {
        this.condtion = {
          TableName: 'Employee',
          FieldName: 'ID',
          ParameterName: 'ID',
          Value: this.empID,
          OperatorType: Enum.OperatorType.Equal,
          JoinerType: Enum.JoinerType.And,
          LikePosition: ''
        }
        this.condtionList.push(this.condtion);
      }
      if (this.name) {
        this.condtion = {
          TableName: 'Employee',
          FieldName: 'FirstName_L1',
          ParameterName: 'FirstName_L1',
          Value: this.name,
          OperatorType: Enum.OperatorType.Like,
          JoinerType: Enum.JoinerType.And,
          GroupId:1,
          LikePosition: Enum.LikePositionType.AroundWords
        }
        this.condtionList.push(this.condtion);
  
        this.condtion = {
          TableName: 'Employee',
          FieldName: 'FirstName_L2',
          ParameterName: 'FirstName_L2',
          Value: this.name,
          OperatorType: Enum.OperatorType.Like,
          JoinerType: Enum.JoinerType.Or,
          GroupId:1,
          LikePosition: Enum.LikePositionType.AroundWords
        }
        this.condtionList.push(this.condtion);
  
        this.condtion = {
          TableName: 'Employee',
          FieldName: 'FirstName_L3',
          ParameterName: 'FirstName_L3',
          Value: this.name,
          OperatorType: Enum.OperatorType.Like,
          JoinerType: Enum.JoinerType.Or,
          GroupId:1,
          LikePosition: Enum.LikePositionType.AroundWords
        }
        this.condtionList.push(this.condtion);

        this.condtion = {
          TableName: 'Employee',
          FieldName: 'FirstName_L4',
          ParameterName: 'FirstName_L4',
          Value: this.name,
          OperatorType: Enum.OperatorType.Like,
          JoinerType: Enum.JoinerType.Or,
          GroupId:1,
          LikePosition: Enum.LikePositionType.AroundWords
        }
        this.condtionList.push(this.condtion);
      }
      if (this.workExpSelected) {
        let TimeStart = this.workExpList.filter(workExp=>workExp.ID == this.workExpSelected)[0].TimeStart;
        this.condtion = {
          TableName: 'Employee',
          FieldName: 'StartWorkDate',
          ParameterName: 'StartWorkDate',
          Value: TimeStart,
          OperatorType: Enum.OperatorType.GreaterEqual,
          JoinerType: '',
          LikePosition: ''
        }
        this.condtionList.push(this.condtion);
      }
      if (this.workExpSelected) {
        let TimeEnd = this.workExpList.filter(workExp=>workExp.ID == this.workExpSelected)[0].TimeEnd;
        this.condtion = {
          TableName: 'Employee',
          FieldName: 'StartWorkDate',
          ParameterName: 'StartWorkDate',
          Value: TimeEnd,
          OperatorType: Enum.OperatorType.LessEqual,
          JoinerType: '',
          LikePosition: ''
        }
        this.condtionList.push(this.condtion);
      }
  
      this.searchParam = {
        ConditionList: this.condtionList,
        SortTable: 'Employee',
        SortColumn: 'EmpCode',
        SortAscending: true,
        Page: 0,
        ItemsPerPage: 10
      }
  
    }

    setDepartmentCondition() {
      this.condtion = {};
      this.condtionList = [];
      this.searchParam = {};
        this.condtion = {
          TableName: 'MSDepartment',
          FieldName: 'IsActive',
          ParameterName: 'IsActive',
          Value: '1',
          OperatorType: Enum.OperatorType.Equal,
          JoinerType: '',
          LikePosition: ''
        }
        this.condtionList.push(this.condtion);
  
      this.searchParam = {
        ConditionList: this.condtionList,
        SortTable: 'MSDepartment',
        SortColumn: 'ID',
        SortAscending: true,
        Page: 0,
        ItemsPerPage: 10
      }
  
    }
    setDivisionCondition() {
      this.condtion = {};
      this.condtionList = [];
      this.searchParam = {};
        this.condtion = {
          TableName: 'MSDivision',
          FieldName: 'IsActive',
          ParameterName: 'IsActive',
          Value: '1',
          OperatorType: Enum.OperatorType.Equal,
          JoinerType: '',
          LikePosition: ''
        }
        this.condtionList.push(this.condtion);
  
      this.searchParam = {
        ConditionList: this.condtionList,
        SortTable: 'MSDivision',
        SortColumn: 'ID',
        SortAscending: true,
        Page: 0,
        ItemsPerPage: 10
      }
  
    }

    setPositionCondition() {
      this.condtion = {};
      this.condtionList = [];
      this.searchParam = {};
        this.condtion = {
          TableName: 'MSPosition',
          FieldName: 'IsActive',
          ParameterName: 'IsActive',
          Value: '1',
          OperatorType: Enum.OperatorType.Equal,
          JoinerType: '',
          LikePosition: ''
        }
        this.condtionList.push(this.condtion);
  
      this.searchParam = {
        ConditionList: this.condtionList,
        SortTable: 'MSPosition',
        SortColumn: 'ID',
        SortAscending: true,
        Page: 0,
        ItemsPerPage: 10
      }
  
    }

    setWorkExpCondition() {
      this.condtion = {};
      this.condtionList = [];
      this.searchParam = {};
        this.condtion = {
          TableName: 'MSWorkExperience',
          FieldName: 'IsActive',
          ParameterName: 'IsActive',
          Value: '1',
          OperatorType: Enum.OperatorType.Equal,
          JoinerType: '',
          LikePosition: ''
        }
        this.condtionList.push(this.condtion);
  
      this.searchParam = {
        ConditionList: this.condtionList,
        SortTable: 'MSWorkExperience',
        SortColumn: 'ID',
        SortAscending: true,
        Page: 0,
        ItemsPerPage: 10
      }
  
    }
  
}

