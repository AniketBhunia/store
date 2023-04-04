import { Injectable } from '@angular/core';
import { BehaviorSubject } from "rxjs";
import { Cart, CartItem } from '../models/cart.model';
import { MatSnackBar } from '@angular/material/snack-bar';
@Injectable({
  providedIn: 'root'
})
export class CartService {
  cart = new BehaviorSubject<Cart>({items:[]})
  constructor(private  _snackbar : MatSnackBar) { }

  addToCart(item:CartItem):void{
   const items = [...this.cart.value.items];
   const itemInCart =   items.find((_item)=> _item.id === _item.id)
   if(itemInCart){
    itemInCart.quantity += 1;
   }else{
    items.push(item)
   }
   this.cart.next({items})
   this._snackbar.open('1 item added','Ok',{ duration:3000})
  //  console.warn(this.cart.value);
   
  }
  getTotal(items: Array<CartItem>): number {
    return items.map((item) => item.price * item.quantity)
      .reduce((prev, current) => prev + current, 0)
  }
  clearCart(){
    this.cart.next({items:[]})
    this._snackbar.open('Cart is Cleared','Ok',{ duration:3000})
  }
}