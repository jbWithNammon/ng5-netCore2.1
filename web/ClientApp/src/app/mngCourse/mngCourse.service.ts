import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable } from "rxjs/Observable";
import { of } from 'rxjs/observable/of';
import { Injectable } from "@angular/core";
import { HttpClientService } from "../equipment/http/http-client.service";
import { ISearchParameter, ICourse, ICourseList, IContentType } from '../models/interfaces'; 

@Injectable()
export class MngCourseService {
    constructor(private http: HttpClientService) {
    }
    
    getCategories(): Observable<any> {
        let url: string = "categortManagement/getListAll";
        let result = this.http.Get<any>(url);
        return result;
    }

    getAllCourses(): Observable<any> {
        let url: string = "course/getDataWithJoin";
        let result = this.http.Get<any>(url);
        return result;
    }    

    getSearchCourses(search: ISearchParameter): Observable<any> {
        let url: string = "course/getDataWithJoin";
        let result = this.http.Post<Array<ICourse>>(url,search);
        return result;
    } 

    getCourseList(search: ISearchParameter): Observable<any> {
        let url: string = "courseList/getCourseListByID";
        let result = this.http.Post<Array<ICourseList>>(url,search);
        return result;
    }
    
    getCourseContentByID(search: ISearchParameter): Observable<any> {
        let url: string = "courseList/getCourseContentByID";
        let result = this.http.Post<Array<IContentType>>(url,search);
        return result;
    }

    getTotalTopicList(): Observable<any> {
        let url: string = "courseList/getTotalTopic";
        let result = this.http.Get<Array<ICourse>>(url);
        return result;
    }
    getMedaiTypeList(): Observable<any> {
        let url: string = "mediaType/getMediaTypeAll";
        let result = this.http.Get<any>(url);
        return result;
    }

    getCourseContent(id: string): Observable<any>{
        let url: string = "mediaType/getMediaTypeAll";
        let result = this.http.Get<any>(url);
        return result;
    }

}