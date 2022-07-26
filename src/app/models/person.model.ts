import { Product } from "./product.model";

export class Person{
    id!:String;
    name!:String;
    role!:String;
    password!:String;
    wishlist!:Product[];
    cart!:Product[];
    phone!:string
}