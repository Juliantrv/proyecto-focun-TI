import { Component, EventEmitter, Output } from '@angular/core';
import { SearchService } from '../../services/search.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrl: './nav.component.css'
})
export class NavComponent {
  listCard = true
  selectedId = '1'
  inputSearch: string

  options = [{ id: 1, option: 'All', state: null }, { id: 2, option: 'Active', state: true }, { id: 3, option: 'Inactive', state: false }]

  @Output() searchEmiter = new EventEmitter<object[]>()
  @Output() viewEmitter = new EventEmitter<string>()
  @Output() productStatusEmiter = new EventEmitter<boolean | null>()

  constructor(
    private searchService: SearchService
  ) { }

  onSelect(event: Event) {
    const id = (event.target as HTMLSelectElement).value
    const state = this.options.find((option) => option.id === +id)?.state
    this.productStatusEmiter.emit(state)
  }

  search() {
    this.searchService.searchProducts(this.inputSearch).subscribe({
      next: (resp) => this.searchEmiter.emit(resp.Object),
      error: (error) => {
        alert('Error when performing a query')
        console.error(error)
      }
    })
  }

  view(view: string) {
    this.viewEmitter.emit(view)
  }
}
