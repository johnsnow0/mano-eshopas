import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/service/api.service';
import { CartService } from 'src/app/service/cart.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

visiProduktai:any;

  constructor(private api:ApiService, private cartService:CartService) {
    
    
    this.api.getProduktai().subscribe((data)=>{this.visiProduktai=data;
    
      this.visiProduktai.forEach((a:any) => {
        Object.assign(a,{quantity:1,total:a.price});
        
      });
    });
   }

  ngOnInit(): void {
  }

addToCart(item:any) {
this.cartService.addtoCart(item);
}



}
