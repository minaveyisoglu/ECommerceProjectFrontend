import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-navi',
  templateUrl: './navi.component.html',
  styleUrls: ['./navi.component.css']
})
export class NaviComponent implements OnInit {


  constructor( private cartService: CartService) { }

  ngOnInit(): void {
  }
  
  cartCount() {
    return this.cartService.list().length;
  }

}
