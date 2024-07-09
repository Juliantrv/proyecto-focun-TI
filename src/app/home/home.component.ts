import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  salesActivity = [
    { qty: 51, label: 'TO BE PACKED', color: 'text-blue-500' },
    { qty: 40, label: 'TO BE SHIPPED', color: 'text-red-500' },
    { qty: 52, label: 'TO BE DELIVERED', color: 'text-green-500' },
    { qty: 97, label: 'TO BE INVOICED', color: 'text-yellow-500' }
  ];

  inventorySummary = {
    quantityInHand: 12746,
    quantityToBeReceived: 62
  };

  categories = [
    {name:"Tecnologia",inventory:100},
    {name:"aseo",inventory:20},
    {name:"muebles",inventory:0}
  ]

}
