import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HeroesService {
  [x: string]: any;
  marvel = [
    {id: "m1", name: "Spider-man", weapon: "Web", catchphrase: "With great power, comes great responsibilities.", picture: 'https://media.playstation.com/is/image/SCEA/marvels-spider-man-hero-banner-02-ps4-us-16jul18?$native_nt$'},
    {id: "m2", name: "Hulk", weapon: "Web", catchphrase: "With great power, comes great responsibilities.", picture: 'https://vignette.wikia.nocookie.net/mua/images/f/f3/MUA3_Hulk.png/revision/latest?cb=20190622010859'},
    {id: "m3", name: "Thor", weapon: "Web", catchphrase: "With great power, comes great responsibilities.", picture: 'https://images.firstpost.com/wp-content/uploads/2019/04/thor380.jpg'},
    {id: "m4", name: "Captain America", weapon: "Web", catchphrase: "With great power, comes great responsibilities.", picture: 'https://cdn2.unrealengine.com/13br-candyapple-newsheader-1920x1080-369027753.jpg'},
    {id: "m5", name: "Wolverain", weapon: "Web", catchphrase: "With great power, comes great responsibilities.", picture: 'https: //upload.wikimedia.org/wikipedia/en/5/5d/Wolverine_%28James_%27Logan%27_Howlett%29.png'},
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

  avengers = 
  [

    {id: "a1", name: "Superman", actor: "Cristopher Reeve", csuperpower: "Flying", picture: 'https://upload.wikimedia.org/wikipedia/en/3/35/Supermanflying.png'},
    {id: "a2", name: "Batman", actor: "Christian Bale", csuperpower: "Weapons", picture: 'https://upload.wikimedia.org/wikipedia/en/7/7b/Batman_%28DC_Rebirth_version%29.png' },
    {id: "a3", name: "Flash", actor: "Grant Gustin", csuperpower: "Speed", picture: 'https://snworksceo.imgix.net/car/3295abf0-8854-48a7-abb5-c0a571d6bf4a.sized-1000x1000.png?w=1000' },
    {id: "a4", name: "Wonder Woman", actor: "Gal gadot", csuperpower: "Strength", picture: 'https://upload.wikimedia.org/wikipedia/en/thumb/9/93/Wonder_Woman.jpg/250px-Wonder_Woman.jpg'},
    {id: "a5", name: "Aquaman", actor: "Jason Momoa", csuperpower: "Breath underwather", picture: 'https://img.cinemablend.com/filter:scale/quill/b/9/f/a/d/b/b9fadb4c6bc3b054783f683a45c3a0fc90c14083.jpg?fw=1200'},
  ];

  constructor() { }
}
