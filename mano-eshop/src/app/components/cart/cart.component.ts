import { ThrowStmt } from '@angular/compiler';
import { i18nMetaToJSDoc } from '@angular/compiler/src/render3/view/i18n/meta';
import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/service/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

product:any = [];
grandTotal:number=0;

  constructor(private cartService:CartService) { }

  ngOnInit(): void {
    this.cartService.getProducts().subscribe(res=>{this.product=res;});
   this.grandTotal = this.cartService.getTotalPrice()
  }
  removeItem(item:any) {
    this.cartService.removeCartItem(item);
  }
  emptyCart() {
    this.cartService.removeCart();
  }
}
