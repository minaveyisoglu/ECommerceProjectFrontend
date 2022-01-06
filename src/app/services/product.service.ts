import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Product } from '../models/product';
import { Observable } from 'rxjs';
import { ListResponseModel } from '../models/listResponseModel';
import { ResponseModel } from '../models/responseModel';
import { ProductDetail } from '../models/productDetail';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  products: Product[] = [];
  apiUrl = "https://localhost:44354/api/products/"

  constructor(private httpClient: HttpClient) { }
  getProducts(): Observable<ListResponseModel<Product>> {
    let newUrl = this.apiUrl + "getproductdetails";
    return this.httpClient.get<ListResponseModel<Product>>(newUrl);
  }
  getProductDetails(productId:number): Observable<ListResponseModel<ProductDetail>> {
    let newUrl = this.apiUrl + "getproductdetails?categoryId=" + productId;
    return this.httpClient.get<ListResponseModel<ProductDetail>>(newUrl);
  }
  getProductsByCategory(categoryId: number): Observable<ListResponseModel<Product>> {
    let newUrl = this.apiUrl + "getbycategory?categoryId=" + categoryId
    return this.httpClient.get<ListResponseModel<Product>>(newUrl);
  }

  add(product: Product): Observable<ResponseModel> {
    return this.httpClient.post<ResponseModel>(this.apiUrl + "add", product)
  }
}

