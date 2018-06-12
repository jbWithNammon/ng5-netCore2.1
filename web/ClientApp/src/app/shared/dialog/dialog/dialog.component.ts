import { Component, OnInit , Inject,Renderer2,ViewEncapsulation} from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from "@angular/material";
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { FormBuilder } from '@angular/forms';
import { FormsModule,ReactiveFormsModule  } from '@angular/forms';
import { MessageResource } from '../../resources/message.resource';
import { DialogService } from '../dialog.service';
import { ICategoryMangementModel } from '../../../models/interfaces';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.css']
})
export class DialogComponent implements OnInit {
    activeIDList: Array<string>;
    InActiveIDList: Array<string>;
    txt_CategoryName1: string;
    txt_Description1: string;
    txt_CategoryName2: string;
    txt_Description2: string;
    txt_CategoryName3: string;
    txt_Description3: string;
    txt_CategoryName4: string;
    txt_Description4: string;
    txt_EffectiveDate: string;
    txt_ExpireDate: string;
    cmbIcon: string;
    AddData: ICategoryMangementModel;
    constructor(private service: DialogService,
        public dialogRef: MatDialogRef<DialogComponent>,
        @Inject(MAT_DIALOG_DATA) public data: any,public message: MessageResource
    ) {}

    result: boolean;

    ngOnInit() {
        debugger;
        this.AddData = {};
        if (this.data.dialogType == 'categoryMNG') {
          if (this.data.actionType == 'Edit') {
            this.AddData.ID = this.data.inData.ID;
            this.txt_CategoryName1 =  this.data.inData.Name_L1;
            this.txt_CategoryName2 = this.data.inData.Name_L2;
            this.txt_CategoryName3 = this.data.inData.Name_L3;
            this.txt_CategoryName4 = this.data.inData.Name_L4;
            this.txt_Description1 = this.data.inData.Description_L1;
            this.txt_Description2 = this.data.inData.Description_L2;
            this.txt_Description3 = this.data.inData.Description_L3;
            this.txt_Description4 = this.data.inData.Description_L4;
            this.txt_EffectiveDate = new Date(this.data.inData.EffDate).toISOString().substring(0, 10)
            this.txt_ExpireDate = new Date(this.data.inData.ExpDateShow).toISOString().substring(0, 10)
          }
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

    UpdateData(): any {
      this.setEditData();
      this.dialogRef.close(this.AddData);
    }

    closeDialog() {
      this.dialogRef.close();
    }

    setEditData() {
      this.AddData.Name_L1 = this.txt_CategoryName1;
      this.AddData.Name_L2 = this.txt_CategoryName2;
      this.AddData.Name_L3 = this.txt_CategoryName3;
      this.AddData.Name_L4 = this.txt_CategoryName4;
      this.AddData.Description_L1 = this.txt_Description1;
      this.AddData.Description_L2 = this.txt_Description2;
      this.AddData.Description_L3 = this.txt_Description3;
      this.AddData.Description_L4 = this.txt_Description4;
      this.AddData.EffDateShow = this.txt_EffectiveDate;
      this.AddData.ExpDateShow = this.txt_ExpireDate;
    }
}

