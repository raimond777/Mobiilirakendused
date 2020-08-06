import { Component, OnInit } from '@angular/core';
import { CarService } from '../car.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {
  carTitle = "List autodest" 
  cars;

  constructor(private carService: CarService) {}
  ngOnInit(): void {
    this.cars = this.carService.cars;
  }

}
