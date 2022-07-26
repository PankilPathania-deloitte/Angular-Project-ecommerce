import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Person } from '../models/person.model';
import { Product } from '../models/product.model';
import { ApiService } from './api.service';
import { ProductService } from './product.service';

@Injectable({
  providedIn: 'root'
})
export class WishlistService {

  url = "http://localhost:3000/users/"
  u_id = localStorage.getItem("id")
  constructor(private http: HttpClient, private productService: ProductService,private service:ApiService) { }

  addWishlist(id: any) {

    const headers = { 'content-type': 'application/json' }
    this.productService.getProductById(id).subscribe(
      data => {
        this.service.getUserById(this.u_id).subscribe(
          us=>{
            us.wishlist.push(data)
            const body=JSON.stringify(us);
            console.log(us)
            this.http.put(this.url+this.u_id,body,{'headers':headers}).subscribe(
              (x: any) => {
                console.log("SUCCESS")
              }, (error: any) => {
                console.log(error)
              }
            )
          }
        )
      }
      
    )
  }

  getWishlist(){
    return this.http.get<Person>(this.url + this.u_id)
  }

  removeWishlist(id: any) {
    const headers = { 'content-type': 'application/json' }
    this.service.getUserById(this.u_id).subscribe(
      data=>{
        console.log(data.wishlist)
        var index = data.wishlist.findIndex(function(item, i){
          return item.id == id
        });
        data.wishlist.splice(index)
        const body=JSON.stringify(data);
        return this.http.put(this.url+this.u_id,body,{'headers':headers}).subscribe(
          response=>{
            
          }
        )
      }
    )
    // return this.http.delete(this.url)
  }
}
