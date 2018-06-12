import { ICourse, ISearchParameter } from './../models/interfaces';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable } from "rxjs/Observable";
import { of } from 'rxjs/observable/of';
import { Injectable } from "@angular/core";
import { HttpClientService } from "../equipment/http/http-client.service";

@Injectable()
export class UsrHomeService {
    constructor(private http: HttpClientService,private httpTest:HttpClient) {
    }

    getCourseList(search:ISearchParameter):Observable<ICourse[]>{
        let url:string = 'http://localhost:585/api/course/getjoin';
        return this.http.Post(url,search);
    }

    postFileUpload(filesToUpload){
        debugger;
        const formData: any = new FormData();
        const files: Array<File> = filesToUpload;
        console.log(files);
    
        for(let i =0; i < files.length; i++){
            formData.append("uploads[]", files[i], files[i]['name']);
        }
        console.log('form data variable :   '+ formData.toString());
        this.httpTest.post('http://localhost:60868/api/Upload', formData)
        /* .map(files => files.json())
            .subscribe(files => console.log('files', files)) */
    }
}