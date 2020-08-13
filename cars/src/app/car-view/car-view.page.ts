import { Component, OnInit } from '@angular/core';
import { CarService } from '../car.service';
import { ActivatedRoute, Router } from '@angular/router';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-car-view',
  templateUrl: './car-view.page.html',
  styleUrls: ['./car-view.page.scss'],
})
export class CarViewPage implements OnInit {
car;
id;
  constructor(private carService: CarService,
    private route: ActivatedRoute,
    private alert: AlertController,
    private router: Router )
    
     { }

  ngOnInit() {
    //
    this.route.paramMap.subscribe(params => {
     this.id = params.get (`id`);
    })
    
    this.car = this.carService.cars.find(car => car.id==this.id
      );
  }
  onDelete() {

    this.alert.create({
      header: "Oled kindel?",
      message: "Kas  soovid kustutada",
      buttons: [
        {text: "Cancel", role: `cancel`},
        {text: "Delete", handler: ()=>{var carID = this.carService.cars.map(car=>car.id).indexOf(this.car.id);
    
          this.carService.cars.splice(carID, 1);
          this.router.navigateByUrl("/home");

        } }
        
      ]


    }).then(alertEL=> {alertEL.present()})
    
  
  
  }


}
