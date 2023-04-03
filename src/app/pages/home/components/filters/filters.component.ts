import { Component ,EventEmitter,OnInit ,Output} from '@angular/core';

@Component({
  selector: 'app-filters',
  templateUrl: "./filters.component.html"
})
export class FiltersComponent implements OnInit {
  @Output() showCategory = new EventEmitter<string>()
  categories = ["shoes","shirts","tshirts"]
  constructor(){

  }
  ngOnInit(): void {
      
  }
  onShowCategory(item:string):void{
    this.showCategory.emit(item)    
  }
}
