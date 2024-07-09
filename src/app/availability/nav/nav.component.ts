import { Component } from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrl: './nav.component.css'
})
export class NavComponent {
  listCard = true
  selectedId = '1'
  inputSearch: string

  options = [{ id: 1, option: 'All' }, { id: 2, option: 'Active' }, { id: 3, option: 'Inactive' }]

  onSelect(event: Event) {
    const id = event.target as HTMLSelectElement;
    this.selectedId = id.value;
    console.log('Selected value:', this.selectedId);
  }
  
  search(){
    alert(this.inputSearch + ' prueba OK')
  }
}
