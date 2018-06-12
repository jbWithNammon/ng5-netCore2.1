import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { HttpClientService } from '../equipment/http/http-client.service';
import { ICategoryMangementModel, IExaminationModel, ISearchParameter } from '../models/interfaces';
import { HttpHeaders } from '@angular/common/http';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json',
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Methods': 'GET, POST,OPTIONS',
    'Access-Control-Allow-Headers': 'Content-Type'
  })
};

@Injectable()
export class CategoryManagementService {

  constructor(private http: HttpClientService) { }
  getCategoryAll(search: ISearchParameter): Observable<any> {
    debugger;
    return this.http.Post<Array<ICategoryMangementModel>>('/categortManagement/getListData',search,httpOptions);
  }
  getCategoryById(id: number): Observable<any> {
    return this.http.Get<Array<ICategoryMangementModel>>('/categortManagement/getByID?id=' + id);
  }
  AddCategory(dataInsert: ICategoryMangementModel): Observable<any> {
    debugger;
    return this.http.Post<boolean>('/categortManagement/addMSCategory', dataInsert, httpOptions);
  }
  UpdateCategory(dataUpdate: ICategoryMangementModel): Observable<any> {
    debugger;
    return this.http.Post<boolean>('/categortManagement/updateMSCategory', dataUpdate, httpOptions);
  }
  Updatepriority(dataUp: ICategoryMangementModel): Observable<any> {
    debugger;
    return this.http.Post<boolean>('/categortManagement/piority', dataUp, httpOptions);
  }


  //form 

  GetExaminationList(search: ISearchParameter): Observable<any> {
    //debugger;
    return this.http.Post<Array<IExaminationModel>>('examination/searchData', search, httpOptions);
  }

  GetCoureseList(): Observable<any> {
    debugger;
    return this.http.Get<Array<IExaminationModel>>('examination/getListData');
  }
}
