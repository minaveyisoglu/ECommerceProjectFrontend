import { CartService } from 'src/app/services/cart.service';
import { CartItem } from './../../models/cartItem';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css']
})
export class PaymentComponent implements OnInit {

  strikeCheckout:any = null;
  cartItems: CartItem[]=[];
  constructor() { }

  ngOnInit() {
    this.stripePaymentGateway();
  }
  
  checkout(amount:any) {
    const strikeCheckout = (<any>window).StripeCheckout.configure({
      key: 'pk_test_51KBjTADSPRPb6PgaSFv47dE1nLUHy5ltccTiSWeKabgBBI4kyxN8kRykKTp7IXzkKnCyKx28VUHxdCgm5d6l7G8W001uOwKkis',
      locale: 'auto',
      token: function (stripeToken: any) {
        console.log(stripeToken)
        alert('Stripe token generated!');
      }
    });
  
    strikeCheckout.open({
      name: 'RemoteStack',
      description: 'Payment widgets',
      amount: amount * 100
    });
  }
  
  stripePaymentGateway() {
    if(!window.document.getElementById('stripe-script')) {
      const scr = window.document.createElement("script");
      scr.id = "stripe-script";
      scr.type = "text/javascript";
      scr.src = "https://checkout.stripe.com/checkout.js";

      scr.onload = () => {
        this.strikeCheckout = (<any>window).StripeCheckout.configure({
          key: 'pk_test_51KBjTADSPRPb6PgaSFv47dE1nLUHy5ltccTiSWeKabgBBI4kyxN8kRykKTp7IXzkKnCyKx28VUHxdCgm5d6l7G8W001uOwKkis',
          locale: 'auto',
          token: function (token: any) {
            console.log(token)
            alert('Payment via stripe successfull!');
          }
        });
      }
        
      window.document.body.appendChild(scr);
    }
  }

}
