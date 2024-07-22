import { Component } from '@angular/core';
import { ProductService } from '../services/product.service';
import { Product } from './../interfaces/products.interface';

@Component({
  selector: 'app-availability',
  templateUrl: './availability.component.html',
  styleUrl: './availability.component.css'
})
export class AvailabilityComponent {
  
  componentView: string = 'card'
  componentSearch: object[]
  products: Product[]
  productStatus: boolean | null = null

  constructor(
    private productService: ProductService
  ) { }


  ngOnInit(){
    this.productService.getProducts().subscribe({
      next: (resp) => {
        this.products = resp.Object
      },
      error: (error) => console.error(error)
    })    
  }

  changeView(view: string) {
    this.componentView = view
  }

  changeSearchEmiter(search: object[]) {
    this.componentSearch = search
  }

  productStatusChange(state: boolean | null ){
    this.productStatus = state
  }
}
