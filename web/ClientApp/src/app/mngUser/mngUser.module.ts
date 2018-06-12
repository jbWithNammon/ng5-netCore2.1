import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MngUserComponent } from './mngUser/mngUser.component';
import { MngUserRoutingModule } from './mngUser-routing.module';
import { MngUserDialogComponent } from '../mngUser/mngUserDialog/mngUserDialog.component';
import { FormsModule, ReactiveFormsModule  } from '@angular/forms';
import { SharedModule } from '../shared/shared.module';
import { MngUserService } from './mngUser.service';
import { MatDialogModule, MatTableModule} from "@angular/material";
//import { Base64UploadComponent } from '../base64-upload/base64-upload.component';
// import { FileUploadModule } from 'ng2-file-upload';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MngUserRoutingModule,
    SharedModule,
    HttpClientModule,
    MatTableModule,
    MatDialogModule,
  ],
  declarations: [
    MngUserComponent,
    MngUserDialogComponent],
  providers: [MngUserService],
  entryComponents: [MngUserDialogComponent]
})
export class MngUserModule { }
