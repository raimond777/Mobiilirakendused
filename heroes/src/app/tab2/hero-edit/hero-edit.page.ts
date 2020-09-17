import { Component, OnInit } from '@angular/core';
import { CapcomHero } from 'src/app/capcom-hero.model';
import { ActivatedRoute } from '@angular/router';
import { HeroesService } from 'src/app/heroes.service';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-hero-edit',
  templateUrl: './hero-edit.page.html',
  styleUrls: ['./hero-edit.page.scss'],
})
export class HeroEditPage implements OnInit {
  hero: CapcomHero;
  heroEditForm: FormGroup;


  constructor(private route: ActivatedRoute,
    private heroeService: HeroesService) { }

  ngOnInit() {
    this.route.params.subscribe(params=> 
      {
        let id = params.heroId;
        this.hero = this.heroeService.getOneCapcomHero (id);          
      })
      this.initForm();
    }

      initForm(){
        this.heroEditForm=new FormGroup({ 
          id: new FormControl(this.hero.id),
          name: new FormControl(this.hero.id),
          firstAppearance: new FormControl(this.hero.id)
        })
      
  }

}
