import { Component } from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent {
  products = [
    { name: 'Lavadora', sku: 'LV01', price: '1.000.000', description:'Descripción 1', src:'https://th.bing.com/th/id/R.16f6f0bc5b9cb80bd919021214afe029?rik=w4ilWQkpO86%2fSQ&pid=ImgRaw&r=0' },
    { name: 'Cama', sku: 'CM01', price: '5000.000', description:'Descripción 2', src:'https://www.espacity.com/w/wp-content/uploads/01347001000020_1-768x624.jpg' },
    { name: 'Camisa', sku: 'CS01', price: '20.000', description:'Descripción 3', src:'https://th.bing.com/th/id/OIP.3dT9HE8X0EoUw-N8ax7vrAHaKx?rs=1&pid=ImgDetMain' },
    { name: 'Camisa ref.002', sku: 'CS02', price: '10.000', description:'Descripción 4', src:'https://th.bing.com/th/id/OIP.cf7bD2wtbDZPasfTuuhEvQHaHa?rs=1&pid=ImgDetMain' },
  ]
}
