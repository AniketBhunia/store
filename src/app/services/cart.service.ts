import { Injectable } from '@angular/core';
import { BehaviorSubject } from "rxjs";
import { Cart, CartItem } from '../models/cart.model';
import { MatSnackBar } from '@angular/material/snack-bar';
@Injectable({
  providedIn: 'root'
})
export class CartService {
  cart = new BehaviorSubject<Cart>({ items: [] })
  constructor(private _snackbar: MatSnackBar) { }

  addToCart(item: CartItem): void {
    const items = [...this.cart.value.items];
    const itemInCart = items.find((_item) => _item.id === item.id)
    if (itemInCart) {
      itemInCart.quantity += 1;
    } else {
      items.push(item)
    }
    this.cart.next({ items })
    this._snackbar.open('1 item added', 'Ok', { duration: 3000 })
    //  console.warn(this.cart.value);

  }
  removeQuantity(item: CartItem): void {
    let itemForRemovel: CartItem | undefined
    let filteredItems = this.cart.value.items.map((_item) => {
      if (_item.id === item.id) {
        _item.quantity--;
        if (_item.quantity === 0) {
          itemForRemovel = _item;
        }
      }
      return _item
    })
    if (itemForRemovel) {
      filteredItems = this.removeFromCart(itemForRemovel, false)
    }

    this.cart.next({ items: filteredItems })
    this._snackbar.open('1 item Removed from Cart', "Ok", {
      duration: 3000
    })
  }


  getTotal(items: Array<CartItem>): number {
    return items.map((item) => item.price * item.quantity)
      .reduce((prev, current) => prev + current, 0)
  }

  clearCart() {
    this.cart.next({ items: [] })
    this._snackbar.open('Cart is Cleared', 'Ok', { duration: 3000 })
  }

  removeFromCart(item: CartItem, upadte = true): Array<CartItem> {
    const filteredItems = this.cart.value.items.filter(
      (_item) => _item.id !== item.id
    );

    if (upadte) {
      this.cart.next({ items: filteredItems });
      this._snackbar.open('1 item Removed', 'Ok', {
        duration: 3000
      });
    }
    return filteredItems
  }

}
