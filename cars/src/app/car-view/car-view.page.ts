import { Component, OnInit } from '@angular/core';
import { CarService } from '../car.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-car-view',
  templateUrl: './car-view.page.html',
  styleUrls: ['./car-view.page.scss'],
})
export class CarViewPage implements OnInit {
car;
id;
  constructor(private carService: CarService,
    private route: ActivatedRoute) { }

  ngOnInit() {
    //
    this.route.paramMap.subscribe(params => {
     this.id = params.get (`id`);
    })
    
    this.car = this.carService.cars[this.id];
  }
  onDelete() {this.carService.cars.splice(this.id, 1)}


}
