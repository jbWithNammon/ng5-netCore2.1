import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UsrHomeComponent }    from './usrHome/usrHome.component';
import { Base64UploadComponent } from '../base64-upload/base64-upload.component';


const homeRoutes: Routes = [
  { path: '',  component: UsrHomeComponent},
  {path:'base64',component:Base64UploadComponent}
];

@NgModule({
  imports: [
    RouterModule.forChild(homeRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class UsrHomeRoutingModule { }