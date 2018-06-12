import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsrHomeComponent } from './usrHome/usrHome.component';
import { UsrHomeRoutingModule } from './usrHome-routing.module';
import { FormsModule,ReactiveFormsModule  } from '@angular/forms';
import { SharedModule } from '../shared/shared.module';
import { UsrHomeService } from './usrHome.service';
import { Base64UploadComponent } from '../base64-upload/base64-upload.component';

import { MatAutocompleteModule } from '@angular/material/autocomplete';
// import { FileUploadModule } from 'ng2-file-upload';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    UsrHomeRoutingModule,
    SharedModule,
    MatAutocompleteModule
    // FileUploadModule

  ],
  declarations: [UsrHomeComponent,Base64UploadComponent],
  providers: [UsrHomeService]
})
export class UsrHomeModule { }
