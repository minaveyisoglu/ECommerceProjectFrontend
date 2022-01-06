export interface Order{
    orderId:number;
    userId:number;
    orderStatusId:number;
    addressId:number;
    count:number;
    isActive:boolean;
    createDate:Date;
}