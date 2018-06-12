import { NgModule }       from '@angular/core';
import { CommonModule }   from '@angular/common';
import { FormsModule }    from '@angular/forms';
import { LoginComponent }    from './login/login.component';
import { AuthService } from './auth.service';
import { AuthRoutingModule } from './auth-routing.module';
import { AppService } from '../app.service';
import { HttpClient, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AuthInterceptor } from '../equipment/http-interceptors/auth-interceptor';
import { HttpClientService } from '../equipment/http/http-client.service';
import { NumPadDirective } from '../shared/directive/numpad.directive';
import { MatDialogModule } from '@angular/material';
import { NumPadDialog } from '../shared/directive/dialog/numpad.component.dialog';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    AuthRoutingModule
  ],
  declarations: [
    LoginComponent  
  ],
  providers: [AuthService,HttpClientService]
})
export class AuthModule {}