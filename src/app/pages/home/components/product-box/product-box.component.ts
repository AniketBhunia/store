import { Component,EventEmitter,Input,OnInit,Output } from '@angular/core';
import { Product } from 'src/app/models/product.model';

@Component({
  selector: 'app-product-box',
  templateUrl:"./product-box.component.html"
})
export class ProductBoxComponent implements OnInit {
  @Input() fullwidthMode = false
  product: Product | undefined = {
    id:1,
    title:"Air Force 1",
    price: 150,
    category:"shoes",
    description:"Nice Shoes",
    image:"https://via.placeholder.com/150"
  };
  @Output() addToCart = new EventEmitter()
  constructor(){

  }
  ngOnInit(): void {
      
  }
  onAddtoCart():void{
    this.addToCart.emit(this.product)
  }
}
