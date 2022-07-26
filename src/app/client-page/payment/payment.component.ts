import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.scss']
})
export class PaymentComponent implements OnInit {

  val!: number
  paymentHandler: any = null;
  u_id = localStorage.getItem("id")

  url = "http://localhost:3000/users/"
  constructor(private service: ApiService,private router:Router) { }

  ngOnInit(): void {
    this.invokeStripe();
    this.getTotalPrice()
  }

  initializePayment(amount: number) {
    const paymentHandler = (<any>window).StripeCheckout.configure({
      key: 'pk_test_51LP42YSEQigezKc5CWi3821eYMrtzQVA4OPY3XiMh9WjT036hWoxdeJ9cVNMxaDnfkGRAvZv4qajagkd29jPCXgU00LxzM488x',
      locale: 'auto',
      token:(stripeToken: any)=> {
        console.log({ stripeToken })
        if(confirm("Check Invoice")){
          this.router.navigate(["/client-page/invoice"])
        }
      }
    });
    paymentHandler.open({
      name: 'Payment',
      description: 'Buying',
      amount: amount * 100
    });
  
  }

  invokeStripe() {
    if (!window.document.getElementById('stripe-script')) {
      const script = window.document.createElement("script");
      script.id = "stripe-script";
      script.type = "text/javascript";
      script.src = "https://checkout.stripe.com/checkout.js";
      script.onload = () => {
        this.paymentHandler = (<any>window).StripeCheckout.configure({
          key: 'pk_test_51LP42YSEQigezKc5CWi3821eYMrtzQVA4OPY3XiMh9WjT036hWoxdeJ9cVNMxaDnfkGRAvZv4qajagkd29jPCXgU00LxzM488x',
          locale: 'auto',
          token: function (stripeToken: any) {
            console.log(stripeToken)
            alert('Payment has been successfull!');
          }
        });
      }
      window.document.body.appendChild(script);
      
    }

  }

  getTotalPrice() {
    this.service.getUserById(this.u_id).subscribe(
      data => {
        let total_price = 0
        data.cart.forEach(function (v, i) {
          total_price += parseInt(v.product_price)
        })
        this.val = total_price
      }
    )
  }

}
