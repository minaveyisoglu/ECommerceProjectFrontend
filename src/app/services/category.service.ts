import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Category } from '../models/category';
import { ListResponseModel } from '../models/listResponseModel';
import { SingleResponseModel } from '../models/singleResponseModel';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  categories:Category[]=[];
  apiUrl = 'https://localhost:44354/api/categories/';
  constructor(private httpClient: HttpClient) { }
  
  getCategories():Observable<ListResponseModel<Category>> {
    let newUrl=this.apiUrl+ "getall";
    return this.httpClient.get<ListResponseModel<Category>>(newUrl);
  }
  getCategoriesById(categoryId:number):Observable<SingleResponseModel<Category[]>>{
    let newUrl=this.apiUrl+"getbycategory?categoryId="+categoryId
    return this.httpClient.get<SingleResponseModel<Category[]>>(newUrl);
  }
}

