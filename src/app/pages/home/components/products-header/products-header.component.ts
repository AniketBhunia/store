import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-products-header',
  templateUrl: './products-header.component.html'
})
export class ProductsHeaderComponent implements OnInit {
  @Output() colnumchange = new EventEmitter<number>
  sort = "desc"
  itemShowCount = 10
  constructor() {

  }
  ngOnInit(): void {

  }
  onSort(newsort: string): void {
    this.sort = newsort
  }
  onItems(count:number):void{
    this.itemShowCount = count
  }
  onCol(colNum:number):void{
    this.colnumchange.emit(colNum)
  }
}
