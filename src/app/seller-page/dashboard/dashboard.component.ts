import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Product } from 'src/app/models/product.model';
import { CartService } from 'src/app/services/cart.service';
import { ProductService } from 'src/app/services/product.service';
import { WishlistService } from 'src/app/services/wishlist.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  // products!: Product[];
  products: any[] = []
  url = "http://localhost:3000/products/"
  u_id = localStorage.getItem("id")
  constructor(private service: ProductService,
    private snackBar: MatSnackBar, private cartService: CartService,private http:HttpClient) { }

  ngOnInit(): void {
    // this.service.getProduct().subscribe(
    //   data => {
    //     this.products = data
    //   }
    // )
    this.getProduct()
    
  }



  openBuyDialog(product: any) {

    this.cartService.addCart(product.id)
    this.showSnackBarProductBought(product.product_name, "dismiss")
  }

  showSnackBarProductBought(productName: string, action: string) {
    this.snackBar.open(
      'Your|' + productName + '|' + '  has been added to your cart ',
      action,
      {
        duration: 5000,
      }
    );
  }

  getProduct(){
    this.products=[]
    this.service.getProductByOwner().subscribe(
      (data: any) => {
        data.forEach((v: Product, i: any) => {
          if (v.owner == this.u_id) {
            this.products.push(v)
          }
        })
        
      }
    )
  }
  removeProduct(product: any) {
    this.http.delete(this.url+product.id).subscribe(
      data=>{
        this.ngOnInit()
      },error=>{
        console.log(error)
      }
    )
  }
}
