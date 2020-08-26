import { Component, OnInit } from '@angular/core';
import { HeroesService } from '../heroes.service';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page implements OnInit{
  avengers =[];
  
  constructor(private heroesService: HeroesService) {}
  ngOnInit(): void {
    this.avengers=this.heroesService.avengers;
  }
}
