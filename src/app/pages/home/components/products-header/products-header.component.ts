import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-products-header',
  templateUrl: './products-header.component.html'
})
export class ProductsHeaderComponent implements OnInit {
  @Output() colnumchange = new EventEmitter<number>
  @Output() itemShowCountChange = new EventEmitter<number>
  @Output() sortChange = new EventEmitter<string>
  
  sort = "desc"
  itemShowCount = 12
  constructor() {

  }
  ngOnInit(): void {

  }
  onSort(newsort: string): void {
    this.sort = newsort
    this.sortChange.emit(newsort)
  }
  onItems(count:number):void{
    this.itemShowCount = count
    this.itemShowCountChange.emit(count)
  }
  onCol(colNum:number):void{
    this.colnumchange.emit(colNum)
  }
}
