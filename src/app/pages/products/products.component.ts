import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styles: []
})
export class ProductsComponent implements OnInit {

  products=[
    {item:'Tempranillo',price:500},
    {item:'Merlot',price:700},
    {item:'Nebbiolo',price:900},
    {item:'Cabernet',price:400},
    {item:'Ensamble',price:650},
    {item:'Blanco',price:200},
  ];

  constructor(
    private cartService:CartService
  ) { }

  ngOnInit() {
  }

  addItem(id){
    this.cartService.addItem(this.products[id]);
  }

}
