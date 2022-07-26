import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Product } from 'src/app/models/product.model';
import { CartService } from 'src/app/services/cart.service';
import { ProductService } from 'src/app/services/product.service';
import { SearchService } from 'src/app/services/search.service';
import { WishlistService } from 'src/app/services/wishlist.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  u_id = localStorage.getItem("id")
  user!: String
  products!: Product[];
  searchName: string = ''
  product_name = ''
  constructor(private service: ProductService, private wishlistService: WishlistService,
    private snackBar: MatSnackBar, private cartService: CartService,
    private searchService: SearchService) { }

  ngOnInit(): void {
    this.service.getProduct().subscribe(
      data => {
        this.products = data
      }
    )

    this.searchService.searchString$.subscribe(
      data => {
        this.searchName = data
      })
  }

  addProductWishlist(product: any) {
    this.wishlistService.addWishlist(product.id)
    this.showSnackBarProductWishlist(product.product_name, "dismiss")
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

  showSnackBarProductWishlist(productName: string, action: string) {
    this.snackBar.open(
      'Your|' + productName + '|' + '  has been added to your wishlist ',
      action,
      {
        duration: 5000,
      }
    );
  }

  onNameFilter() {
    this.searchService.setSearchString(this.product_name)
    console.log(this.product_name)
  }
  onNameFilterClear() {
    this.product_name = '';
    this.searchService.setSearchString('')
    console.log(this.product_name)
  }
}
