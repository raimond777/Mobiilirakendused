import { Component, OnInit } from '@angular/core';
import { HeroesService } from '../heroes.service';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page implements OnInit{
  capcom =[];

  constructor(private heroesService: HeroesService) {}
  ngOnInit(): void {
    this.capcom=this.heroesService.capcom;
  }

}
