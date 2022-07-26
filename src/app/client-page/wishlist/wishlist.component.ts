import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Product } from 'src/app/models/product.model';
import { ApiService } from 'src/app/services/api.service';
import { CartService } from 'src/app/services/cart.service';
import { WishlistService } from 'src/app/services/wishlist.service';

@Component({
  selector: 'app-wishlist',
  templateUrl: './wishlist.component.html',
  styleUrls: ['./wishlist.component.scss']
})
export class WishlistComponent implements OnInit {
  wishlist!: Product[];
  selectedValue!: string;
  u_id=localStorage.getItem("id")
  url = "http://localhost:3000/users/"

  constructor(private wishlistService: WishlistService,private service:ApiService,private http:HttpClient,private cartService:CartService
    ,private snackBar: MatSnackBar) { }

  ngOnInit(): void {
    this.getWishlist();

  }
  getWishlist() {
    this.wishlistService.getWishlist().subscribe((data) => {
      this.wishlist = data.wishlist
    })

  }

  removeProductFromWishlist(product: any) {
    // this.wishlistService.removeWishlist(product.id)


    const headers = { 'content-type': 'application/json' }
    this.service.getUserById(this.u_id).subscribe(
      data=>{
        console.log(data.wishlist)
        var index = data.wishlist.findIndex(function(item, i){
          return item.id == product.id
        });
        data.wishlist.splice(index,1)
        const body=JSON.stringify(data);
        return this.http.put(this.url+this.u_id,body,{'headers':headers}).subscribe(
          response=>{
            this.ngOnInit()
          }
        )
      }
    )
  }

  openBuyDialog(p: any) {
    
    this.cartService.addCart(p.id)
    this.showSnackBarProductBought(p.product_name,"dismiss")

  }

  showSnackBarProductBought(productName: string, action: string) {
    this.snackBar.open(
      'Your|' + productName + '|' +'  has been added to your cart ',
    action,
    {
    duration: 5000,
    }
    );
    }


  ngOnChanges(){
    if(this.wishlist){
      this.getWishlist()
    } 
  }
}
