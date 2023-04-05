import { Component,EventEmitter,Input,OnInit,Output } from '@angular/core';
import { Product } from 'src/app/models/product.model';

@Component({
  selector: 'app-product-box',
  templateUrl:"./product-box.component.html"
})
export class ProductBoxComponent implements OnInit {
  @Input() fullwidthMode = false
  @Input() product: Product | undefined
  @Output() addToCart = new EventEmitter()
  constructor(){

  }
  ngOnInit(): void {
      
  }
  onAddtoCart():void{
    this.addToCart.emit(this.product)
  }
}
