import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HeroesService } from 'src/app/heroes.service';

@Component({
  selector: 'app-hero-view',
  templateUrl: './hero-view.page.html',
  styleUrls: ['./hero-view.page.scss'],
})
export class HeroViewPage implements OnInit 
{ hero;


  constructor(private route: ActivatedRoute,
    private heroeService: HeroesService) { }

  ngOnInit() {
    this.route.params.subscribe(params=> 
      {
        let id = params.heroId;
        this.hero = this.heroeService.capcom.find
        (heroFromArray => heroFromArray.id == id)          
      })
  }
}
