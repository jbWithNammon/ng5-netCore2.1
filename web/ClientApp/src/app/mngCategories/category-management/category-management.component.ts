import { Component, OnInit } from '@angular/core';
import { CategoryManagementService } from '../category-management.service';
import * as Models from '../../models/interfaces';
import * as Enum from '../../models/constants';
import { DialogComponent } from '../../shared/dialog/dialog/dialog.component';
import { MatDialog, MatDialogConfig } from '@angular/material';
import { Observable } from 'rxjs';
import { AppService } from '../../app.service';


@Component({
  selector: 'app-category-management',
  templateUrl: './category-management.component.html',
  styleUrls: ['./category-management.component.css']
})
export class CategoryManagementComponent implements OnInit {
  txtCategoryName: string;
  txtDateFrom: string;
  txtDateTo: string;
  cmbPriority: string;
  results: Models.ICategoryMangementModel[];
  result: Models.ICategoryMangementModel;
  searchParam: Models.ISearchParameter = {};
  condtion: Models.ISearchCondition = {};
  condtionList: Models.ISearchCondition[] = [];

  isDialogOpen: number;

  constructor(private categoryManagementService: CategoryManagementService,
              private dialog: MatDialog,
              private app: AppService) { }

  ngOnInit() {
    this.getSearch();
    this.getCurrentData();

  }
  getCurrentData() {
    debugger;
    let date = new Date();
    this.txtDateFrom = new Date(date.getFullYear(), date.getMonth(), 2).toISOString().substring(0, 10);
    this.txtDateTo = new Date(date.getFullYear(), date.getMonth() + 1, 1).toISOString().substring(0, 10);
  }

  getSearch() {
    this.setCondition();
    this.categoryManagementService.getCategoryAll(this.searchParam).subscribe((res) => {
      if (res) {
        this.results = res.ResultList;
        // for (let i = 0; i < this.results.length; i++) {
        //   this.results[i].EffDateShow = this.results[i].EffDate.substring(0, 10);
        //   this.results[i].ExpDateShow = this.results[i].ExpDate.substring(0, 10);
        // }
      }
      console.log(res);
    }, (err) => {

    });
  }
  setCondition() {
    this.condtion = {};
    this.condtionList = [];
    if (this.txtCategoryName) {
      this.condtion = {
        TableName: 'MSCategory',
        FieldName: 'Name_L1',
        ParameterName: 'Name_L1',
        Value: this.txtCategoryName,
        OperatorType: Enum.OperatorType.Like,
        JoinerType: '',
        LikePosition: Enum.LikePositionType.AroundWords
      }
      this.condtionList.push(this.condtion);

      this.condtion = {
        TableName: 'MSCategory',
        FieldName: 'Name_L2',
        ParameterName: 'Name_L2',
        Value: this.txtCategoryName,
        OperatorType: Enum.OperatorType.Like,
        JoinerType: Enum.JoinerType.Or,
        LikePosition: Enum.LikePositionType.AroundWords
      }
      this.condtionList.push(this.condtion);

      this.condtion = {
        TableName: 'MSCategory',
        FieldName: 'Name_L3',
        ParameterName: 'Name_L3',
        Value: this.txtCategoryName,
        OperatorType: Enum.OperatorType.Like,
        JoinerType: Enum.JoinerType.Or,
        LikePosition: Enum.LikePositionType.AroundWords
      }
      this.condtionList.push(this.condtion);

      this.condtion = {
        TableName: 'MSCategory',
        FieldName: 'Name_L4',
        ParameterName: 'Name_L4',
        Value: this.txtCategoryName,
        OperatorType: Enum.OperatorType.Like,
        JoinerType: Enum.JoinerType.Or,
        LikePosition: Enum.LikePositionType.AroundWords
      }
      this.condtionList.push(this.condtion);
    }
    if (this.txtDateFrom) {
      this.condtion = {
        TableName: 'MSCategory',
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
        TableName: 'MSCategory',
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
      SortTable: 'MSCategory',
      SortColumn: 'Priority',
      SortAscending: true,
      Page: 0,
      ItemsPerPage: 10
    }

  }

  priorityUp(index) {
     let dataUp = this.results[index];
    let dataDown = this.results[index - 1];
    dataUp.Priority = (index).toString();
    dataDown.Priority = (index + 1).toString();
    this.categoryManagementService.Updatepriority(dataUp).subscribe(resUp => {
      if (resUp) {
        this.categoryManagementService.Updatepriority(dataDown).subscribe(resDown => {
          if (resDown) {
            this.getSearch();
          }
        });
      }
    });
  }

  priorityDown(index) {
    let dataDown = this.results[index];
    let dataUp = this.results[index + 1];
    dataDown.Priority = (index + 2).toString();
    dataUp.Priority = (index + 1).toString();
    this.categoryManagementService.Updatepriority(dataDown).subscribe(resDown => {
      if (resDown) {
        this.categoryManagementService.Updatepriority(dataUp).subscribe(resUp => {
          if (resUp) {
            this.getSearch();
          }
        });
      }
    });
  }
  openDialog(data): void {
    if (data == 'Add') {
      let dialogOTPAdd = this.dialog.open(DialogComponent, {
        width: '700px',
        disableClose: true,
        data: {dialogType: 'categoryMNG', actionType: 'Add', inData: null}
      });
      dialogOTPAdd.afterClosed().subscribe(dataAdd => {
        debugger;
        if (dataAdd) {
          this.categoryManagementService.AddCategory(dataAdd).subscribe(res => {
            if (res) {
              this.getSearch();
            }
          });
        }
      });
    } else {
      debugger;
      let tempData = this.results.filter(dataObject => dataObject.ID == data);
      this.result = tempData[0];
      let dialogOTPEdit = this.dialog.open(DialogComponent, {
        width: '700px',
        disableClose: true,
        data: {dialogType: 'categoryMNG', actionType: 'Edit', inData: this.result}
      });
      dialogOTPEdit.afterClosed().subscribe(dataUpdate => {
        debugger;
        if (dataUpdate) {
          this.categoryManagementService.UpdateCategory(dataUpdate).subscribe(res => {
            if (res) {
              this.getSearch();
            }
          });
        }
      });
    }
  }
}
