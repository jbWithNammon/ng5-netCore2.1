import { Injectable, Inject } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Observable } from 'rxjs';
import { LocalStorageService } from 'ngx-webstorage';
import { Router, RoutesRecognized, NavigationEnd } from '@angular/router';
//import { appSettings } from './models/appSettings';
import { HttpClient, HttpParams } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import { HttpClientService } from './equipment/http/http-client.service';
import { ConfigurationService } from './configuration/configuration.service';

@Injectable()
export class AppService { 
  public obLanguageId = new BehaviorSubject(null);
  /* private readonly appSettings: string = 'AppSettings';
  private settingData: Promise<appSettings>; */
  
  constructor(private $localStorage: LocalStorageService,
    public router: Router,    
    @Inject('BASE_URL') private originUrl: string
    ,private configService: ConfigurationService) {      
    if (this.getLocalStorage('languageId') == undefined) {      
      Observable.interval(100).takeWhile(val => this.getLocalStorage('languageId') != undefined).subscribe(i => {      
        this.setLocalStorage('languageId', this.configService.config.languageIndex);
        if(this.configService.config.languageIndex != undefined){
          this.obLanguageId.next(this.configService.config.languageIndex);
        } 
    })
    }
    //this.obCultureId.next(configService.config.language);
    
  }

  /* loadSettingData(): Promise<appSettings> {
    let self = this;
		return this.http.Get(`${this.originUrl}${this.appSettings}`)
			.toPromise()
			.then((response: Response) => {
				this.settingData = response.json();
				return this.settingData;
			})
			.catch(err => {
				return Promise.reject(err);
			});
  }
  
  get config(): Promise<appSettings> {
		return this.settingData;
  } */
  
  private isAuth = new BehaviorSubject<boolean>(this.getLocalStorage('isAuth') == undefined ? false : this.getLocalStorage('isAuth'));
  obIsAuth = this.isAuth.asObservable();
  private leftbarId = new BehaviorSubject<number>(0);
  obLeftbarId = this.leftbarId.asObservable();

  setLocalStorage(key: string, value: any): void {
    this.$localStorage.store(key, value);
  }
  getLocalStorage(key: string): any {
    return this.$localStorage.retrieve(key);
  }
  removeLocalStorage(key: string): void {
    this.$localStorage.clear(key);
  }
}