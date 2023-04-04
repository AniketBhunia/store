import { Component, OnInit } from '@angular/core';
import { Cart, CartItem } from 'src/app/models/cart.model';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html'
})
export class CartComponent implements OnInit {
  cart: Cart = {
    items: [
      {
        productImg: "https://via.placeholder.com/150",
        name: "Air force 1",
        price: 150,
        quantity: 1,
        id: 1
      },
      {
        productImg: "https://via.placeholder.com/150",
        name: "Air force 1",
        price: 150,
        quantity: 4,
        id: 2
      }
    ]
  };
  dataSource: Array<CartItem> = []
  displayedColumns: Array<string> = [
    'productImg',
    'name',
    'price',
    'quantity',
    'total',
    'action'
  ]
  constructor(private cartService:CartService) {

  }
  ngOnInit(): void {
    this.dataSource = this.cart.items
  }
  getTotal(items: Array<CartItem>): number {
    return this.cartService.getTotal(items)
  }
}
