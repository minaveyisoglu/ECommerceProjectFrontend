import { ProductImage } from './../../models/product-image';
import { ProductDetailService } from './../../services/product-detail.service';
import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { Product } from './../../models/product';
import { ProductDetail } from 'src/app/models/productDetail';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {

  product:any;

  dataLoaded = false;
  url: string = "https://localhost:44354"
  constructor(private productDetailService:ProductDetailService,private activatedRoute: ActivatedRoute) {}

  ngOnInit(): void {

    this.activatedRoute.params.subscribe(params => {
      if (params['productId']) {
        this.getProductsDetailByProductId(params['productId'])
      }
    })
  }
  getProductsDetailByProductId(productId:number) {
    this.productDetailService.getProductsDetailByProductId(productId).subscribe(response=>{
      this.product= response.data
      this.dataLoaded = true;
    })   
  }
}