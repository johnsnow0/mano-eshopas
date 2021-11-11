import { ThrowStmt } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/service/cart.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

counter:number=0;
counter1:number=10;

  constructor(private cart:CartService) { }

  ngOnInit(): void {
    
  this.cart.getProducts().subscribe(res=>{this.counter=res.length;})

  }

}
