import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AuthModule } from './authentication/auth.module';
import { Router, NavigationStart, NavigationEnd, ChildActivationEnd, RouterState, RouterStateSnapshot, ActivatedRouteSnapshot } from '@angular/router';
import { UsrHomeModule } from './usrHome/usrHome.module';
import { AppService } from './app.service';
import { LocalStorageService, SessionStorageService } from 'ngx-webstorage';
import { AuthGuardService } from './authentication/auth-guard.service';
import { OtherModule } from './other/other.module';
import { OtherComponent } from './other/other/other.component';
import { MessageResource } from './shared/resources/message.resource';
import { AppComponent } from './app.component';
import { IConfig,IConfiguration } from './models/interfaces';
import { LayoutModule } from './layout/layout.module';
import { SharedModule } from './shared/shared.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { APP_INITIALIZER } from '@angular/core';
import { ConfigurationService } from './configuration/configuration.service';
import {ToastModule} from 'ng2-toastr/ng2-toastr';
import { QuillEditorModule } from 'ngx-quill-editor';

import { MngCourseModule } from './mngCourse/mngCourse.module';
/* import {VgCoreModule} from 'videogular2/core';
import {VgControlsModule} from 'videogular2/controls';
import {VgOverlayPlayModule} from 'videogular2/overlay-play';
import {VgBufferingModule} from 'videogular2/buffering'; */

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserAnimationsModule,
    FormsModule,
    QuillEditorModule,
    UsrHomeModule,
    AppRoutingModule,
    OtherModule,
    AuthModule,
    LayoutModule,
    SharedModule,
    BrowserModule.withServerTransition({ appId: 'ng-cli-universal' }),
    ToastModule.forRoot(),
    HttpClientModule,
    MngCourseModule
/*     VgCoreModule,
    VgControlsModule,
    VgOverlayPlayModule,
    VgBufferingModule */
  ],
  providers: [ConfigurationService,
    {
      provide: APP_INITIALIZER,
      useFactory: (configService: ConfigurationService) =>
        () => configService.loadConfigurationData(),
      deps: [ConfigurationService],
      multi: true
    },
    AppService, LocalStorageService, AuthGuardService, MessageResource],
  bootstrap: [AppComponent]
})
export class AppModule {

  constructor(private router: Router, private service: AppService) {
    console.log('app module');
    // if (this.service.getLocalStorage('languageId') == null) {
    //   this.service.setLocalStorage('languageId', configService.config.languageIndex);
    // }
  }
}

export function getWebConfig(): IConfig {
  debugger;
  let ele = document.getElementsByTagName('link')[0];
  let att: IConfig = JSON.parse(atob(ele.getAttribute('config')));
  return att;
}

