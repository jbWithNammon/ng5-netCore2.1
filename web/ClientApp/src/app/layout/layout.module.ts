import { NgModule }       from '@angular/core';
import { CommonModule }   from '@angular/common';
import { FormsModule,ReactiveFormsModule }    from '@angular/forms';

import { FooterComponent } from './footer/footer.component';
import { LeftBarComponent } from './leftBar/leftBar.component';
import { TopBarComponent } from './topBar/topBar.component';
import { LayoutService } from './layout.service';

import { AppService } from '../app.service';
import { NumPadDialog } from '../shared/directive/dialog/numpad.component.dialog';
import { MatDialogModule,MatButtonModule } from '@angular/material';
import { DialogComponent } from '../shared/dialog/dialog/dialog.component';
import { DialogModule } from '../shared/dialog/dialog.module';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,    
    MatDialogModule,
    MatButtonModule,
    ReactiveFormsModule,
    DialogModule
  ],
  declarations: [
    FooterComponent,
    LeftBarComponent,
    TopBarComponent,
  ]
  ,entryComponents: [
    NumPadDialog,
    DialogComponent
  ],
  providers: [LayoutService],
  exports:[FooterComponent,LeftBarComponent,TopBarComponent]
})
export class LayoutModule {}