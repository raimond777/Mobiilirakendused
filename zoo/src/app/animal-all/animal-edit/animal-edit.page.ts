import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AnimalService } from 'src/app/animal.service';
import { FormGroup, FormControl } from '@angular/forms';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-animal-edit',
  templateUrl: './animal-edit.page.html',
  styleUrls: ['./animal-edit.page.scss'],
})
export class AnimalEditPage implements OnInit {
animalId: number;
animal;

animalEditForm: FormGroup;

  constructor(private route: ActivatedRoute, private animalService: AnimalService, private alert: AlertController) { }

  ngOnInit() {
    this.route.params.subscribe(urlParams=>{
      this.animalId=urlParams.animalId;
      console.log(this.animalId);// kontroll//

    })
    this.animal=this.animalService.animals[this.animalId];
    console.log(this.animal);
    
    this.initForm();
  }

  onEmpty(){
    this.initForm();

  }
  initForm(){
    this.animalEditForm=new FormGroup({

    name: new FormControl (this.animal.name),
    profilePic: new FormControl (this.animal.profilePic),
    location: new FormControl (this.animal.location),
    about: new FormControl (this.animal.about),
    id: new FormControl (this.animal.id),
    visible: new FormControl (this.animal.visible)
  });

  }
  onDelete(){
    
    this.alert.create({
      header: "Oled kindel?",
      message: "Kas  soovid kustutada",
      buttons: [
        {text: "Cancel", role: `cancel`},
        {text: "Delete", handler: 
        ()=>{
          this.animalService.animals.splice(this.animalId, 1);
          
          
          var carID = this.carService.cars.map(car=>car.id).indexOf(this.car.id);
    
          this.carService.cars.splice(carID, 1);
          this.router.navigateByUrl("/home");

        } }


  }


  onSubmit(animalEditForm: FormGroup){
    console.log(animalEditForm.value);
    this.animalService.animals[this.animalId]=animalEditForm.value;

  }

}
