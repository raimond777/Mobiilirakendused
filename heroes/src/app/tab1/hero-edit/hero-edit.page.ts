import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HeroesService } from 'src/app/heroes.service';
import { FormGroup, FormControl } from '@angular/forms';
import { MarvelHero } from 'src/app/marvel-hero.models';

@Component({
  selector: 'app-hero-edit',
  templateUrl: './hero-edit.page.html',
  styleUrls: ['./hero-edit.page.scss'],
})
export class HeroEditPage implements OnInit {
  hero: MarvelHero;
  heroEditForm:FormGroup;
  id: string;

  constructor(private route: ActivatedRoute, 
    private heroesService: HeroesService,
    private router: Router
    ) { }

  ngOnInit():void {
    this.getHeroByParams();
    this.initForm(); 
  }
    getHeroByParams(){
    this.route.params.subscribe(params=>{
    this.id=params.heroId    
    this.hero=this.heroesService.getOneMarvelHero(this.id);
   });
  }

       
  
  initForm(){
this.heroEditForm = new FormGroup({
    name: new FormControl(this.hero.name),
    weapon: new FormControl(this.hero.weapon),
    catchphrase: new FormControl(this.hero.catchphrase),
    picture: new FormControl(this.hero.picture),
    id: new FormControl(this.hero.id)
 });

  }

  onSubmit():void{
    let form=this.heroEditForm.value;
    let newHero = new MarvelHero(form.id, form.name, form.weapon, form.catchphrase, form.picture)
    this.heroesService.editMarvelHero(newHero);
    this.router.navigateByUrl("/tabs/marvel");

  }

}
