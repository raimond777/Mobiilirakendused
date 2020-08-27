import { Component } from '@angular/core';
import { AnimalService } from '../animal.service';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {
animals=[];
  constructor(private animalService: AnimalService) {
    this.animals = this.animalService.animals;
  }

}
