import { Component, OnInit} from '@angular/core';
import { MessageResource } from '../../shared/resources/message.resource';
import { AppService } from '../../app.service';
import { AuthService } from '../../authentication/auth.service';
import { Router, ActivatedRoute } from '@angular/router';
import { IUser } from './../../models/interfaces';
import { CommonValidation } from '../../models/CommonValidation';
import { MatDialog } from '@angular/material';
import { DialogComponent } from '../../shared/dialog/dialog/dialog.component';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';


@Component({
  selector: 'topBar',
  templateUrl: './topBar.component.html',
  styleUrls: ['./topBar.component.css']
})

export class TopBarComponent implements OnInit {  
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

/*   get appLanguage(): Array<any> {
		return new Array(this.app.config.then);
  } */
  
  ngOnInit() {
    this.userName = "supachai";
    this.password = "1234";
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

  setLanguage(id:string):void{
    this.app.obLanguageId.next(id);
    this.app.setLocalStorage('languageId', id);
  }
  // setLang(lang: string) {
  //   this.app.setLocalStorage('languageId', lang);
  //   //this.message.langListener(lang);
  // }

  getLogin(): void {
      this.user.UserName = this.userName;
      this.user.Password = this.password;
      let self = this;
/*       this.auth.getLogin(this.user).subscribe(
        res => {
          debugger;
          // self.userName = "";
          // self.app.setLocalStorage('userAuth', self.user.userName);
          // self.app.setLocalStorage('isAuth', true);
          self.isAuth = true;
          // this.openDialogWarning("Login สำเร็จ");
        }, err => {
        }); */
        this.userName = "";
        this.app.setLocalStorage('userAuth', "sd");
        this.app.setLocalStorage('isAuth', true);
        this.isAuth = true;
        this.openDialogWarning("Login สำเร็จ");
  }

  getLogOut() {
    let self = this;
    this.auth.getLogout().subscribe(res => {
      if (res) {
        self.app.setLocalStorage('isAuth', !res);
        self.app.removeLocalStorage('token');
        self.isAuth = !res;
        self.router.navigate(['/Home']);
      }
    }, err => {

    });
  }
  /* ValidateData(): boolean {
    let isPassUserName: boolean = false;
    let isPassPassword: boolean = false;
    if (!this.validate.isNullorEmtry('User Name', this.userName)) {
      if (this.validate.isNoSpace('User Name', this.userName)) {
        isPassUserName = true;
      } else {
        this.openDialogWarning("Username ต้องไม่มีช่องว่าง");
      }
    } else {
      this.openDialogWarning("Username ต้องไม่เว้นว่าง");
    }
    if (isPassUserName) {
      if (!this.validate.isNullorEmtry('Password', this.password)) {
        if (this.validate.isNoSpace('Password', this.password)) {
          isPassPassword = true;
        } else {
          this.openDialogWarning("Password ต้องไม่มีช่องว่าง");
        }
      } else {
        this.openDialogWarning("Password ต้องไม่เว้นว่าง");
      }
    }
    return isPassUserName && isPassPassword;
  }
 */
  openDialogWarning(dialogTitle): void {
    let dialogRef = this.dialog.open(DialogComponent, {
      width: '250px',
      autoFocus: false,
      data: { dialogType: 'alert', dialogTitle: dialogTitle }
    });
  }
}
