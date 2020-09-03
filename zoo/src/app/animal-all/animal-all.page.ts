import { Component, OnInit } from '@angular/core';
import { AnimalService } from '../animal.service';

@Component({
  selector: 'app-animal-all',
  templateUrl: './animal-all.page.html',
  styleUrls: ['./animal-all.page.scss'],
})
export class AnimalAllPage implements OnInit {
  animals=[];

  constructor(private animalService: AnimalService) {
    
  }
  ngOnInit(){
    this.animals = this.animalService.animals;
  }
}


