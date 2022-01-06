import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http'
import {FormsModule, ReactiveFormsModule} from "@angular/forms"
import {BrowserAnimationsModule} from "@angular/platform-browser/animations"

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductComponent } from './components/product/product.component';
import { CategoryComponent } from './components/category/category.component';
import { NaviComponent } from './components/navi/navi.component';

import {ToastrModule} from "ngx-toastr";
import { ProductAddComponent } from './components/product-add/product-add.component';
import { LoginComponent } from './components/login/login.component';
import { AuthInterceptor } from './interceptors/auth.interceptor';
import { ProductDetailComponent } from './components/product-detail/product-detail.component';
import { CartSummaryComponent } from './components/cart-summary/cart-summary.component';
import { BrandComponent } from './components/brand/brand.component';
import { ProductPipePipe } from './pipes/productPipe';
import { BrandPipePipe } from './pipes/brandPipe';
import { CategoryPipe } from './pipes/categoryPipe';
import { PaymentComponent } from './components/payment/payment.component';




@NgModule({
  declarations: [
    AppComponent,
    ProductComponent,
    CategoryComponent,
    NaviComponent,
    ProductAddComponent,
    LoginComponent,
    ProductDetailComponent,
    CartSummaryComponent,
    BrandComponent,
    ProductPipePipe,
    BrandPipePipe,
    CategoryPipe,
    PaymentComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    ToastrModule.forRoot({
      positionClass:"toast-bottom-right"
    })
  ],
  providers: [
    {provide:HTTP_INTERCEPTORS, useClass:AuthInterceptor, multi:true}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }