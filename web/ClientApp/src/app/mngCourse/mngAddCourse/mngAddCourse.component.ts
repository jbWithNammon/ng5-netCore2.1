import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators,FormBuilder } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { MessageResource } from '../../shared/resources/message.resource';
import { MngCourseService } from '../mngCourse.service';
import { Router } from '@angular/router';
import { ICourse, ICategoryMangementModel } from '../../models/interfaces';
import { AppService } from '../../app.service';
import * as Enum from '../../models/constants';

@Component({
  selector: 'mngAddCourse',
  templateUrl: './mngAddCourse.component.html',
})
export class MngAddCourseComponent {
  courseInsert: ICourse;
  categoriesList: ICategoryMangementModel[];
  activeIDList: string[];
  InActiveIDList: string[];
  constructor(
    public message: MessageResource,
    private fb: FormBuilder,
    private service: MngCourseService,
    public router: Router,
    private app: AppService
  ) {
    /* this.app.switchLang
    .subscribe((value: string) => {        
      //this.setCateria(value);
      // ... another fn
    }) */
   }

   ngOnInit(){
    this.courseInsert = this.app.getLocalStorage('addCourseObj');
    
     if(this.courseInsert == null){
      this.courseInsert = {}; 
     }
    this.getCategories();
    this.courseInsert.EffDate = new Date().toISOString().substring(0, 10);
    this.courseInsert.ExpDate = new Date().toISOString().substring(0, 10);
    
     //this.app.getLocalStorage('appLang');
   }

   getCategories(){
     this.service.getCategories().subscribe( data => {
      this.categoriesList = data;
     });
   }

   nextPage(){
    this.app.setLocalStorage('addCourseObj', this.courseInsert);

    if(this.courseInsert.CourseTypeID == 1){
      this.router.navigate(['/CourseManagement/AddTarget']);
    }
    else{
      this.router.navigate(['/CourseManagement/AddTarget']);
      //AddTopic
    }
   }

onSelectTabInfo(event): void { 
  if (event.target.id == 'tabID_EN') { 
  this.activeIDList = ['TabEN', 'tabID_EN']; 
  this.InActiveIDList = ['TabTH', 'tabID_TH', 'Tab3', 'tabID_3', 'Tab4', 'tabID_4']; 
  this.setPanelControl(this.activeIDList, this.InActiveIDList); 
  
  } else if (event.target.id == 'tabID_TH') { 
  this.activeIDList = ['TabTH', 'tabID_TH']; 
  this.InActiveIDList = ['TabEN', 'tabID_EN', 'Tab3', 'tabID_3', 'Tab4', 'tabID_4']; 
  this.setPanelControl(this.activeIDList, this.InActiveIDList); 
  } else if (event.target.id == 'tabID_3') { 
  this.activeIDList = ['Tab3', 'tabID_3']; 
  this.InActiveIDList = ['TabEN', 'tabID_EN', 'TabTH', 'tabID_TH', 'Tab4', 'tabID_4']; 
  this.setPanelControl(this.activeIDList, this.InActiveIDList); 
  } else if (event.target.id == 'tabID_4') { 
  this.activeIDList = ['Tab4', 'tabID_4']; 
  this.InActiveIDList = ['TabEN', 'tabID_EN', 'TabTH', 'tabID_TH', 'Tab3', 'tabID_3']; 
  this.setPanelControl(this.activeIDList, this.InActiveIDList); 
  } 
  }

  setPanelControl(activeID: Array<string>, InactiveID: Array<string>) { 
    activeID.forEach(function(id) { 
    document.getElementById(id).classList.add('active'); 
    }); 
    
    InactiveID.forEach(function(id) { 
    document.getElementById(id).classList.remove('active'); 
    }); 
    }
}
