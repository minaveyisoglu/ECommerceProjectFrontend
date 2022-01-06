import { SingleResponseModel } from './../models/singleResponseModel';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from '../models/product';
import { ListResponseModel } from '../models/listResponseModel';


@Injectable({
  providedIn: 'root',
})
export class ProductDetailService {
  apiUrl = 'https://localhost:44354/api/products/';

  constructor(private httpClient: HttpClient) {}

  getProductsDetailByProductId(productId:number):Observable<ListResponseModel<Product>>{
    let newPath = this.apiUrl + 'getdetailbyproductid?id=' + productId;
    return this.httpClient.get<ListResponseModel<Product>>(newPath);
  }
}