import { Pipe, PipeTransform } from '@angular/core';
import { Product } from '../models/product';

@Pipe({
  name: 'productPipe'
})
export class ProductPipePipe implements PipeTransform {

  transform(value: Product[], productText: string): Product[] {
    productText = productText?productText.toLocaleLowerCase():"";
    return productText?value
    .filter((p:Product)=>p.productName.toLocaleLowerCase().indexOf(productText)!==-1)
    :value;
  }

}