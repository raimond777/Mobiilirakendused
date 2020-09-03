import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AnimalService } from 'src/app/animal.service';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-animal-edit',
  templateUrl: './animal-edit.page.html',
  styleUrls: ['./animal-edit.page.scss'],
})
export class AnimalEditPage implements OnInit {git add .
  
animalId: number;
animal;

animalEditForm: FormGroup;

  constructor(private route: ActivatedRoute, private animalService: AnimalService) { }

  ngOnInit() {
    this.route.params.subscribe(urlParams=>{
      this.animalId=urlParams.animalId;
      console.log(this.animalId);// kontroll//

    })
    this.animal=this.animalService.animals[this.animalId];
    console.log(this.animal);
    
    this.animalEditForm=new FormGroup({

      name: new FormControl (this.animal.name),
      profilePic: new FormControl (this.animal.profilePic),
      location: new FormControl (this.animal.location),
      about: new FormControl (this.animal.about),
      id: new FormControl (this.animal.id)
    });
  }


  onSubmit(animalEditForm: FormGroup){
    console.log(animalEditForm.value);
    this.animalService.animals[this.animalId]=animalEditForm.value;

  }

}
