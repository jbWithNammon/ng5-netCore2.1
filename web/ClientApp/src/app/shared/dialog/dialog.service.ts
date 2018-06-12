import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable } from "rxjs/Observable";
import { of } from 'rxjs/observable/of';
import { Injectable } from "@angular/core";
import { HttpClientService } from '../../equipment/http/http-client.service';
import { AppService } from '../../app.service';
import { ISearchParameter, IEmployee } from "../../models/interfaces";


@Injectable()
export class DialogService {
    constructor(private http: HttpClientService,private app: AppService) {
    }
    getTargetCourse(search: ISearchParameter): Observable<any> {
        let url: string = "employee/getEmployee";
        let result = this.http.Post<Array<IEmployee>>(url,search);
        return result;
    }
    getDepartment(search: ISearchParameter): Observable<any> {
        let url: string = "department/getDepartment";
        let result = this.http.Post<Array<IEmployee>>(url,search);
        return result;
    } 
    getDivision(search: ISearchParameter): Observable<any> {
        let url: string = "division/getDivision";
        let result = this.http.Post<Array<IEmployee>>(url,search);
        return result;
    } 
    getPosition(search: ISearchParameter): Observable<any> {
        let url: string = "position/getPosition";
        let result = this.http.Post<Array<IEmployee>>(url,search);
        return result;
    } 
    getWorkExp(search: ISearchParameter): Observable<any> {
        let url: string = "workExperice/getWorkExperice";
        let result = this.http.Post<Array<IEmployee>>(url,search);
        return result;
    } 
}