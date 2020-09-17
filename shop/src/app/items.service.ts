import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ItemsService {
  shops=[
  "Narva mnt 7b, Tallinn ",
  "Raadiku 18a, Tartu",
  "J]e 14, P'rnu "
];

  clothes= [
  {name:"Kleit", price: 99, size: "40D" },
  {name:"P[ksid", price: 69, size: "28W60H" },
  {name:"Jope", price: 199, size: "L" } 
]
 

  constructor() { }
}
