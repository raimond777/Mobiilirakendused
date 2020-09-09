import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HeroesService } from 'src/app/heroes.service';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-hero-edit',
  templateUrl: './hero-edit.page.html',
  styleUrls: ['./hero-edit.page.scss'],
})
export class HeroEditPage implements OnInit {
  hero: {id:string, name: string, weapon: string, catchphrase: string, picture: string};
  heroEditForm:FormGroup;
  id: string;

  constructor(private route: ActivatedRoute, private heroesService: HeroesService) { }

  ngOnInit():void {
    this.route.params.subscribe(params=>{this.id=params.heroId
    
    this.hero=this.heroesService.marvel
    .find((heroFromArray: { id: any; }) => heroFromArray.id==this.id)
    console.log(this.hero);
  });

  this.heroEditForm = new FormGroup({
    name: new FormControl(this.hero.name),
    weapon: new FormControl(this.hero.weapon),
    catchphrase: new FormControl(this.hero.catchphrase),
    picture: new FormControl(this.hero.picture),
    id: new FormControl(this.hero.id)
 });
  }

  onSubmit():void{
    this.heroesService.editMarvelHero( this.heroEditForm.value, this.id); 
  }

}
