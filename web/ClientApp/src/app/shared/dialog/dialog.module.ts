import { NgModule }       from '@angular/core';
import { CommonModule }   from '@angular/common';
import { FormsModule,ReactiveFormsModule }    from '@angular/forms';
import { DialogService } from '../dialog/dialog.service';
import { DialogComponent } from '../dialog/dialog/dialog.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,    
    ReactiveFormsModule
  ],
  declarations: [
  ],
  providers: [DialogService]
})
export class DialogModule {}