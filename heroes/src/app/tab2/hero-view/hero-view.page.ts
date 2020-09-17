import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HeroesService } from 'src/app/heroes.service';
import { CapcomHero } from 'src/app/capcom-hero.model';

@Component({
  selector: 'app-hero-view',
  templateUrl: './hero-view.page.html',
  styleUrls: ['./hero-view.page.scss'],
})
export class HeroViewPage implements OnInit 
{ hero: CapcomHero;


  constructor(private route: ActivatedRoute,
    private heroeService: HeroesService) { }

  ngOnInit() {
    this.route.params.subscribe(params=> 
      {
        let id = params.heroId;
        this.hero = this.heroeService.getOneCapcomHero (id);          
      })
  }
}
