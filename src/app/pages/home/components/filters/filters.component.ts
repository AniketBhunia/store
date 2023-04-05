import { Component ,EventEmitter,OnInit ,Output,OnDestroy} from '@angular/core';
import { Subscription } from 'rxjs';
import { StoreService } from 'src/app/services/store.service';

@Component({
  selector: 'app-filters',
  templateUrl: "./filters.component.html"
})
export class FiltersComponent implements OnInit,OnDestroy{
  @Output() showCategory = new EventEmitter<string>()

  categoriesSubscription :Subscription | undefined
  categories:Array<string> | undefined
  constructor(private storeService: StoreService){
  }
  ngOnInit(): void {
    this.categoriesSubscription = this.storeService.getAllCategories().subscribe((res)=>{
      this.categories = res
    })
  }
  onShowCategory(item:string):void{
    this.showCategory.emit(item)    
  }
  ngOnDestroy(): void {
      if(this.categoriesSubscription){
        this.categoriesSubscription.unsubscribe()
      }
  }
}
