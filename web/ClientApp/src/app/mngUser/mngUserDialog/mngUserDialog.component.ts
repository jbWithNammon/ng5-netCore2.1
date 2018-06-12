import { Component, OnInit , Inject} from '@angular/core';
import { FormControl, FormGroup, Validators, FormBuilder } from '@angular/forms';
import { MatDialog, MatDialogConfig } from "@angular/material";
import { MAT_DIALOG_DATA, MatDialogRef} from "@angular/material";

@Component({
    selector: 'mngUserDialog',
    templateUrl: './mngUserDialog.component.html',
  })
  export class MngUserDialogComponent implements OnInit{

    form: FormGroup;
    description:string;

    constructor(
        private fb: FormBuilder,
        private dialogRef: MatDialogRef<MngUserDialogComponent>,
        @Inject(MAT_DIALOG_DATA) Fetchdata) {
        this.description = Fetchdata.description;
    }

    ngOnInit() {
        debugger;
        this.form = this.fb.group({
            description: [this.description, []],
        });
    }

    save() {
        this.dialogRef.close(this.form.value);
    }

    close() {
        this.dialogRef.close();
    }

    }
