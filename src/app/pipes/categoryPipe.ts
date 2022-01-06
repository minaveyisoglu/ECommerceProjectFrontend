import { Pipe, PipeTransform } from '@angular/core';
import { Category } from '../models/category';

@Pipe({
  name: 'categoryPipe'
})
export class CategoryPipe implements PipeTransform {

  transform(value: Category[], categoryText: string): Category[] {
    categoryText = categoryText?categoryText.toLocaleLowerCase():"";
    return categoryText?value
    .filter((c:Category)=>c.categoryName.toLocaleLowerCase().indexOf(categoryText)!==-1)
    :value;
  }
}

