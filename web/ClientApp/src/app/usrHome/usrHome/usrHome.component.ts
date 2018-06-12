import { ICourse } from './../../models/interfaces';
import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators, FormBuilder } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { MessageResource } from '../../shared/resources/message.resource';
import { UsrHomeService } from '../usrHome.service';
import { Router } from '@angular/router';
import { ISearchCondition, ISearchParameter } from '../../models/interfaces';
import * as Enum from '../../models/constants';
import { AppService } from '../../app.service';

@Component({
  selector: 'usrHome',
  templateUrl: './usrHome.component.html',
})
export class UsrHomeComponent {  
  directiveData: number;
  // files : FileList; 
  form: FormGroup;
  filesToUpload: any;
  condtionList: ISearchCondition[] = [];
  condtion: ISearchCondition = {};
  searchParam: ISearchParameter = {};
  course: ICourse = {};
  defLang: string;
  languageId: string;

  ddList: any[] = [
    { value: 1, display: '1' },
    { value: 2, display: '2' },
    { value: 3, display: '3' },
    { value: 4, display: '4' }
  ];
  oldId: string;
  constructor(private app: AppService,
    public message: MessageResource,
    private fb: FormBuilder,
    private service: UsrHomeService,
    public router: Router) {
    this.createForm();
    this.setCourseData();
    this.app.obLanguageId
      .subscribe((value: string) => {
        this.languageId = value;
        //this.setCateria(value);
        // ... another fn
      });
    // this.app.setLocalStorage('cultureId',1);
    // this.cultureId = this.app.getLocalStorage('cultureId');
  }
  onSearchChange(e) {
    console.log('old',this.oldId,' new',e);
  }
  fnBefore(value: string) {    
    this.oldId = value;
    console.log(this.oldId);
  }
  setCourseData() {
    this.course = {
      Criteria_L1: 'thai',
      Criteria_L2: 'english',
      Criteria_L3: 'japan',
      // Criteria_L4: 'china'
    }
  }
  getSearch() {
    this.setCondition();
    this.service.getCourseList(this.searchParam).subscribe((res) => {
      console.log(res);
    }, (err) => {

    });
  }
  setCondition() {
    this.condtion = {};
    if (true) {
      this.condtion = {
        TableName: 'Course',
        FieldName: 'Name_L1',
        ParameterName: 'Name_L1',
        Value: '',
        OperatorType: Enum.OperatorType.Like,
        JoinerType: '',
        LikePosition: Enum.LikePositionType.AllWords
      }
      this.condtionList.push(this.condtion);
    }
    if (true) {
      this.condtion = {
        TableName: 'Course',
        FieldName: 'Name_L2',
        ParameterName: 'Name_L2',
        Value: 'The',
        OperatorType: Enum.OperatorType.Like,
        JoinerType: Enum.JoinerType.Or,
        LikePosition: Enum.LikePositionType.AroundWords
      }
      this.condtionList.push(this.condtion);
    }
    if (true) {
      this.condtion = {
        TableName: 'Course',
        FieldName: 'Name_L3',
        ParameterName: 'Name_L3',
        Value: '',
        OperatorType: Enum.OperatorType.Like,
        JoinerType: Enum.JoinerType.Or,
        LikePosition: Enum.LikePositionType.AllWords
      }
      this.condtionList.push(this.condtion);
    }
    if (true) {
      this.condtion = {
        TableName: 'Course',
        FieldName: 'Name_L4',
        ParameterName: 'Name_L4',
        Value: '',
        OperatorType: Enum.OperatorType.Like,
        JoinerType: Enum.JoinerType.Or,
        LikePosition: Enum.LikePositionType.AllWords
      }
      this.condtionList.push(this.condtion);
    }
    if (true) {
      this.condtion = {
        TableName: 'MSCategory',
        FieldName: 'ID',
        ParameterName: 'ID',
        Value: '1',
        OperatorType: Enum.OperatorType.Equal,
        JoinerType: Enum.JoinerType.And,
        LikePosition: ''
      }
      this.condtionList.push(this.condtion);
    }
    if (true) {
      this.condtion = {
        TableName: 'MSCategory',
        FieldName: 'EffDate',
        ParameterName: 'EffDate',
        Value: '20180501',
        OperatorType: Enum.OperatorType.GreaterEqual,
        JoinerType: Enum.JoinerType.And,
        LikePosition: ''
      }
      this.condtionList.push(this.condtion);
    }
    if (true) {
      this.condtion = {
        TableName: 'Course',
        FieldName: 'ExpDate',
        ParameterName: 'ExpDate',
        Value: '20180630',
        OperatorType: Enum.OperatorType.LessEqual,
        JoinerType: Enum.JoinerType.And,
        LikePosition: ''
      }
      this.condtionList.push(this.condtion);
    }

    this.searchParam = {
      ConditionList: this.condtionList,
      SortTable: '',
      SortColumn: '',
      SortAscending: true,
      Page: 1,
      ItemsPerPage: 10
    }

  }

  getFiles(event) {
    // this.files = event.target.files; 

    let reader = new FileReader();
    if (event.target.files && event.target.files.length > 0) {
      let file = event.target.files[0];
      reader.readAsDataURL(file);
      reader.onload = () => {
        this.form.get('avatar').setValue({
          filename: file.name,
          filetype: file.type,
          value: reader.result.split(',')[1]
        })
      };
    }
  }

  onUpload() {
    /* const formModel = this.form.value;
    setTimeout(() => {
      console.log(formModel);
    }, 1000);
     */
    this.service.postFileUpload(this.filesToUpload);
  }

  fileChangeEvent(fileInput: any) {
    this.filesToUpload = <Array<File>>fileInput.target.files;
    //this.product.photo = fileInput.target.files[0]['name'];
  }
  createForm() {
    this.form = this.fb.group({
      name: ['', Validators.required],
      avatar: null
    });
  }

  /*   gotoBase64(){
      this.router.navigate(['/base64']);
    
    } */

}
