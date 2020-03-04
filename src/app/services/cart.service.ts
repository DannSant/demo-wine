import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  cartItems=[];

  constructor() { }

  addItem(item){
    this.cartItems.push(item);
  }

  getTotal(){
    let amount=0;
     this.cartItems.forEach(item=>{
      amount+=item.price;
     })
     return amount;
  }
}
