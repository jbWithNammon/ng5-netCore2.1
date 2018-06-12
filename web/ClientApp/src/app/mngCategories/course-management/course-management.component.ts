import { Component, OnInit } from '@angular/core';
import { CategoryManagementService } from '../category-management.service';
import { DialogComponent } from '../../shared/dialog/dialog/dialog.component';
import { MatDialog, MatDialogConfig } from '@angular/material';
import { Observable } from "rxjs";
import { AppService } from '../../app.service';
import { ActivatedRoute } from '@angular/router';
import * as Models from '../../models/interfaces';
import * as Enum from '../../models/constants';

@Component({
  selector: 'app-course-management',
  templateUrl: './course-management.component.html',
  styleUrls: ['./course-management.component.css']
})
export class CourseManagementComponent implements OnInit {
  txtCompany: string;
  txtDateFrom: string;
  txtDateTo: string;
  cmbPriority: string;
  results: Models.IExaminationModel[];
  result: Models.IExaminationModel;
  searchParam: Models.ISearchParameter = {};
  condtion: Models.ISearchCondition = {};
  condtionList: Models.ISearchCondition[] = [];
  test:number;

  isDialogOpen: number;
  test_Id: string;

  constructor(private categoryManagementService: CategoryManagementService,
              private app: AppService,
              private route: ActivatedRoute) { }

  ngOnInit() {
    this.test = 0;
    //debugger;
    this.test_Id = this.route.snapshot.paramMap.get('id');
    this.setSearchCondition();
    this.initialData();
   
  }

  setSearchCondition() {
    this.condtion = {};
    this.condtionList = [];
    // if (this.test_Id) {
    //   this.condtion = {
    //     tableName: 'CourseList',
    //     fieldName: 'CouseID',
    //     parameterName: 'CouseID',
    //     value: this.test_Id,
    //     operatorType: Enum.OperatorType.equal,
    //     joinerType: '',
    //     likePosition: ''
    //   }
    //   this.condtionList.push(this.condtion);
    // }

    this.searchParam = {
      ConditionList: this.condtionList,
      SortTable: 'Examination',
      SortColumn: 'ID',
      SortAscending: true,
      Page: 0,
      ItemsPerPage: 10
    }
  }

  initialData() {
    this.categoryManagementService.GetExaminationList(this.searchParam).subscribe(data => {
      if (data) {
        this.results = data.ResultList;
        console.log(data.ResultList);
        // this.results = [{
        //   QuestionQty:"0",
        //   NAME_L1:"l1"
        // }]
      }
    });
    console.log(this.results);
  }
 }
