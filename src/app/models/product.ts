import { ProductImage } from './product-image';
export interface Product{
    productId:number;
    categoryId:number;
    brandId:number;
    productName:string;
    unitsInStock:number;
    description:string;
    unitPrice:number;
    isActive:boolean;
    createDate:Date;
    productImages: ProductImage[];
    imagePath:string;
}