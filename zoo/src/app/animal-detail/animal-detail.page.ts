import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AnimalService } from '../animal.service';

@Component({
  selector: 'app-animal-detail',
  templateUrl: './animal-detail.page.html',
  styleUrls: ['./animal-detail.page.scss'],
})
export class AnimalDetailPage implements OnInit {
  animal: any;

  constructor(
    private route: ActivatedRoute,
    private animalService: AnimalService) { }

  ngOnInit() {
    this.route.params.subscribe((params)=>
   {console.log(params);
    let id = params.animalId;
   this.animal = this.animalService.animals.find
   (animalFromService => animalFromService.id == id);
   console.log(this.animal);   
  })
  }

}
