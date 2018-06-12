import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OtherComponent } from './other/other.component';
import { OtherRoutingModule } from './other-routing.module'; 
import { FormsModule,ReactiveFormsModule  } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    OtherRoutingModule
  ],
  declarations: [OtherComponent],
  providers: []
})
export class OtherModule {}
