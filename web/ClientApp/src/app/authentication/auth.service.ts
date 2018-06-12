import { IFileContent } from './../models/interfaces';
import { Observable } from 'rxjs/Observable';
import { SessionStorageService, LocalStorageService } from 'ngx-webstorage';
import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import { IUser } from '../models/interfaces';
import { of } from 'rxjs/observable/of';
import { catchError, map } from 'rxjs/operators';


import { HttpClientService } from '../equipment/http/http-client.service';
import { AppService } from '../app.service';

@Injectable()
export class AuthService {
    constructor(private http: HttpClientService, private app: AppService) {
    }

    getLogin(user: IUser): Observable<any> {
        let url: string = "token";
        let data = "username=" + user.UserName + "&password=" + user.Password + "&grant_type=password";
        return this.http.Post<any>(url, data);
        //return result;
    }
    /*     getLogin(user: IUser): Observable<any[]> {
            let url: string = "api?empCode=" + user.userName +"&oldPassword="+ user.password;
            let result = this.http.Get<any>(url);
            return result;
        } */
    getLogout(): Observable<boolean> {
        let user: IUser = this.app.getLocalStorage('userAuth');
        return Observable.of(true);

    }
    getUserAuth(): boolean {
        return this.app.getLocalStorage('isAuth');
    }
    getProfile(customerID: string): Observable<boolean> {
        return Observable.of(true);
    }
    setUpload(byte: any): Observable<boolean> {
        let url: string = "api/values/upload";
        const headers = new HttpHeaders({'Content-Type':'application/octet-stream'});
        //let data = file.Value;
        const buffer: ArrayBuffer = byte.buffer;
        return this.http.Post<any>(url, buffer);
    }
}
