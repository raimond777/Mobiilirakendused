import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HeroesService {
  marvel = [
    {id: "m1", name: "Spider-man", weapon: "Web", catchphrase: "With great power, comes great responsibilities."},
    {id: "m2", name: "Hulk", weapon: "Web", catchphrase: "With great power, comes great responsibilities."},
    {id: "m3", name: "Thor", weapon: "Web", catchphrase: "With great power, comes great responsibilities."},
    {id: "m4", name: "Captain America", weapon: "Web", catchphrase: "With great power, comes great responsibilities."},
    {id: "m5", name: "Wolverain", weapon: "Web", catchphrase: "With great power, comes great responsibilities."},
  ];

  capcom = 
  [
    {id: "c1", name: "Mega Man", firstAppearance: 1987},
    {id: "c2", name: "Frank West", firstAppearance: 2006},
    {id: "c3", name: "Ryu", firstAppearance: 1987},
    {id: "c4", name: "Dante", firstAppearance: 2001},
    {id: "c5", name: "Proto man", firstAppearance: 1990},
    {id: "c6", name: "Felicia", firstAppearance: 1994},
  ];

  avengers = [

    {id: "a1", name: "Superman", actor: "Cristopher Reeve", csuperpower: "Flying"},
    {id: "a2", name: "Batman", actor: "Christian Bale", csuperpower: "Weapons"},
    {id: "a3", name: "Flash", actor: "Grant Gustin", csuperpower: "Speed"},
    {id: "a4", name: "Wonder Woman", actor: "Gal gadot", csuperpower: "Strength"},
    {id: "a5", name: "Aquaman", actor: "Jason Momoa", csuperpower: "Breath underwather"},
  ];

  constructor() { }
}
