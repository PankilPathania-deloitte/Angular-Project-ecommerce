import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {


  
  u_id=localStorage.getItem("id")
  addForm = new FormGroup({
    product_name: new FormControl('', [Validators.required]),
    product_weight: new FormControl('', [Validators.required]),
    product_price: new FormControl('', [Validators.required])
  })
  constructor(private service: ProductService,private snackBar: MatSnackBar) { }
  ngOnInit(): void {
  }
  
  addProduct() {
    let final={
      product_name:this.addForm.value.product_name,
      product_weight:this.addForm.value.product_weight,
      product_price:this.addForm.value.product_price,
      owner:this.u_id,
      count:0
    }
    this.showSnackBarProductBought(final.product_name,"dismiss")
    this.service.addProduct(final)

    
  }

  showSnackBarProductBought(productName: string, action: string) {
    this.snackBar.open(
      'Your|' + productName + '|' +'  has been added ',
    action,
    {
    duration: 2000,
    }
    );
    }
}
