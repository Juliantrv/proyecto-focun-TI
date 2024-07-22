import { Product } from './../../interfaces/products.interface';
import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrl: './product.component.css'
})
export class ProductComponent implements OnChanges {
  
  @Input('search') search:object[]
  @Input('products') products:Product[]
  @Input('componentView') componentView:string
  @Input('productStatus') productStatus:boolean | null

  inventory:Product[]
  
  ngOnChanges(changes: SimpleChanges): void {
    if(changes['products']){
      this.inventory = this.products
    }else if(changes['search']){
      this.inventory = changes['search'].currentValue
    }else if(changes['productStatus']){
      if(changes['productStatus'].currentValue == null){
        this.inventory = this.products
      }else{
        this.inventory = this.products.filter((product)=> product.is_active == changes['productStatus'].currentValue)
      }
    }
  }
}