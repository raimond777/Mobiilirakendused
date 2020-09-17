import { Component } from '@angular/core';
import { HeroesService } from '../heroes.service';
import { MarvelHero } from '../marvel-hero.models';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {
  marvelHeroes:MarvelHero[];

  constructor(private heroesService: HeroesService) {}
  ionViewWillEnter(): void {
    this.marvelHeroes = this.heroesService.marvel;
    console.log(this.marvelHeroes);
    

  }

}
