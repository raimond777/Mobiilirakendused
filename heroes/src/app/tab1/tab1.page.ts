import { Component, OnInit } from '@angular/core';
import { HeroesService } from '../heroes.service';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page implements OnInit{
  marvelHeroes:{id:string, name: string, weapon: string, catchphrase: string, picture: string} ;

  constructor(private heroesService: HeroesService) {}
  ngOnInit(): void {
    this.marvelHeroes = this.heroesService.marvel;
    console.log(this.marvelHeroes);
    

  }

}
