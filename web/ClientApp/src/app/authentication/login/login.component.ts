import { Component, OnInit, Input, ViewChild } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router, ActivatedRoute } from '@angular/router';
import {AppService} from '../../app.service';
import { MessageResource } from '../../shared/resources/message.resource';
import { IUser } from './../../models/interfaces';
import { CommonValidation } from '../../models/CommonValidation';
import { MatDialog } from '@angular/material';
import { DialogComponent } from '../../shared/dialog/dialog/dialog.component';

@Component({  
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {  
  isAuth: boolean;
  user: IUser;
  userName: string;
  password: string;
  validate: CommonValidation;
  constructor(private app: AppService,
    private auth: AuthService,
    private router: Router,
    private message: MessageResource,
    public dialog: MatDialog) {
      this.user = {};
  }

  ngOnInit() {    
    this.userName = "";
    this.password = "";
    if (this.app.getLocalStorage('isAuth') != undefined){
      this.isAuth = this.app.getLocalStorage('isAuth');
    }
    else{
      this.isAuth = false;
    }
      this.app.obIsAuth.subscribe(data => {
        this.isAuth = data;
        this.app.setLocalStorage('isAuth', data);
        if (data == true && this.user.UserName == undefined) {
          this.user.UserName = this.app.getLocalStorage('userAuth');
        } else if (!data) {
          this.router.navigate(['/Home']);
        }
      });
  } 
  getLogin(): void {
    this.user.UserName = this.userName;
    let self = this;
/*       this.auth.getLogin(this.user).subscribe(
      res => {
         self.userName = "";
         self.app.setLocalStorage('userAuth', self.user.userName);
         self.app.setLocalStorage('isAuth', true);
         self.isAuth = true;
         this.openDialogWarning("Login สำเร็จ");
      }, err => {
      }); */
      this.userName = "";
      this.app.setLocalStorage('userAuth', "sd");
      this.app.setLocalStorage('isAuth', true);
      this.isAuth = true;
      this.router.navigate(["/Home"]);
      // this.openDialogWarning("Login สำเร็จ");
}
openDialogWarning(dialogTitle): void {
  let dialogRef = this.dialog.open(DialogComponent, {
    width: '250px',
    autoFocus: false,
    data: { dialogType: 'alert', dialogTitle: dialogTitle }
  });
}
}
