import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators,FormBuilder } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { MessageResource } from '../../shared/resources/message.resource';
import { MngUserService } from '../mngUser.service';
import { Router } from '@angular/router';
import { ISearchCondition,ISearchParameter,IUserManagement,IPositionList } from '../../models/interfaces';
import { AppService } from '../../app.service';
import * as Enum from '../../models/constants';
import * as Models  from '../../models/interfaces';
import {MatDialog, MatDialogConfig} from "@angular/material";
import { MngUserDialogComponent } from '../mngUserDialog/mngUserDialog.component';

@Component({
    selector: 'mngUser',
    templateUrl: './mngUser.component.html',
  })
  export class MngUserComponent {
    txtEmpCode: string;
    txtEmpName: string;
    PositionList: IPositionList[];
    UserList: Models.IUserManagement[];
    User: Models.IUserManagement;
    searchParam: Models.ISearchParameter = {};
    condtion: Models.ISearchCondition = {};
    condtionList: Models.ISearchCondition[] = [];
    constructor(
        private service: MngUserService,
        private dialog: MatDialog,
    ) {}

    ngOnInit(){
        this.getPositionList();
        this.setCondition();
        this.getSearch();

    }

    openDialog(data) {

        const dialogConfig = new MatDialogConfig();

        dialogConfig.disableClose = true;
        dialogConfig.autoFocus = true;

        this.dialog.open(MngUserDialogComponent, dialogConfig);
    }

    getPositionList(){
        this.service.getPositionList().subscribe(data => {
            this.PositionList = data;
          });
    }

    getSearch() {
        this.setCondition();
        this.service.getSearhData(this.searchParam).subscribe((res) => {
            this.UserList = res.ResultList;
        }, (err) => {
            console.log(err);
        });
      }

    setCondition() {
    this.condtion = {};
    this.condtionList = [];
    if (this.txtEmpCode) {
            this.condtion = {
              TableName: 'e',
              FieldName: 'Empcode',
              ParameterName: 'Empcode',
              Value: this.txtEmpCode,
              OperatorType: Enum.OperatorType.Like,
              JoinerType: '',
              LikePosition: Enum.LikePositionType.AroundWords
            }
            this.condtionList.push(this.condtion);
        }
    
    if (this.txtEmpName) {
        this.condtion = {
          TableName: 'e',
          FieldName: 'FirstName_L1',
          ParameterName: 'FirstName_L1',
          Value: this.txtEmpName,
          OperatorType: Enum.OperatorType.Like,
          JoinerType: '',
          LikePosition: Enum.LikePositionType.AroundWords
        }
        this.condtionList.push(this.condtion);
    }

    this.searchParam = {
        ConditionList: this.condtionList,
        SortTable: 'e',
        SortColumn: 'Empcode',
        SortAscending: true,
        Page: 0,
        ItemsPerPage: 10
      }
    }
  }