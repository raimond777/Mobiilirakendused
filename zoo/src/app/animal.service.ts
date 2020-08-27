import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AnimalService {
animals= [
  
  {name: "Burt Bear", profilePic: "assets/animals/bear.jpg ", about: " asdsf", location: "", id:"1"},
  {name: "Charlie Cheetah", profilePic: "assets/animals/cheetah.jpg", about: "vhgfh", location: "", id:"2"},
  {name: "Burt Bear", profilePic: "assets/animals/duck.jpg", about: "" , location: "", id:"3"},
  {name: "Burt Bear", profilePic: "assets/animals/eagle.jpg",about: " " ,location: "", id:"4"},
  {name: "Burt Bear", profilePic: "assets/animals/elephant.jpg",about: " " , location: "", id:"5"},
  {name: "Burt Bear", profilePic: "assets/animals/giraffe.jpg",about: " " , location: "", id:"6"},
  {name: "Burt Bear", profilePic: "assets/animals/iguana.jpg", about: " " ,location: "", id:"7"},
  {name: "Burt Bear", profilePic: "assets/animals/kitten.jpg",about: " " , location: "", id:"8"},
  {name: "Burt Bear", profilePic: "assets/animals/lion.jpg", about: " " ,location: "", id:"9"},
  {name: "Burt Bear", profilePic: "assets/animals/mouse.jpg", about: " " ,location: "", id:"10"},
  {name: "Burt Bear", profilePic: "assets/animals/puppy.jpg", about: " " ,location: "", id:"11"},
  {name: "Burt Bear", profilePic: "assets/animals/rabbit.jpg", about: " " ,location: "", id:"12"},
  {name: "Burt Bear", profilePic: "assets/animals/turtle.jpg",about: " " , location: "", id:"13"},
  
  
  {}]

  constructor() { }
}
