import { IUserManagement,ISearchParameter } from './../models/interfaces';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable } from "rxjs/Observable";
import { of } from 'rxjs/observable/of';
import { Injectable } from "@angular/core";
import { HttpClientService } from "../equipment/http/http-client.service";

const httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json',
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'GET, POST, OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type'
    })
  };

@Injectable()
export class MngUserService {
    constructor(private http: HttpClientService,private httpTest:HttpClient) {
    }
    addUserAccount(data: IUserManagement) : Observable<any>{
        let url:string = 'http://localhost:585/api/accountManagement/SearchListData';
        let result = this.http.Post<IUserManagement>(url, data, httpOptions);
        return result;
    }
    getSearhData(search: ISearchParameter) : Observable<any> {
        let url:string = 'http://localhost:585/api/accountManagement/SearchListData';
        let result = this.http.Post<IUserManagement[]>(url, search, httpOptions);
        return result;   
    }
    getPositionList(): Observable<any>{
        let url:string = 'PositionList/getList';
        let result = this.http.Get<any>(url);
        return result;   
    }
}