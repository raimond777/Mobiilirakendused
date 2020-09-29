import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AnimalService {
animals= [
  
  {visible: true, name: "Burt Bear", profilePic: "assets/animals/bear.jpg ", about: " asdsf", location: "", id:"1"},
  {visible: true, name: "Charlie Cheetah", profilePic: "assets/animals/cheetah.jpg", about: "vhgfh", location: "", id:"2"},
  {visible: true, name: "Duck", profilePic: "assets/animals/duck.jpg", about: "" , location: "", id:"3"},
  {visible: true, name: "Eagle", profilePic: "assets/animals/eagle.jpg",about: " " ,location: "", id:"4"},
  {visible: true, name: "Elephant", profilePic: "assets/animals/elephant.jpg",about: " " , location: "", id:"5"},
  {visible: true, name: "Burt Bear", profilePic: "assets/animals/giraffe.jpg",about: " " , location: "", id:"6"},
  {visible: true, name: "Burt Bear", profilePic: "assets/animals/iguana.jpg", about: " " ,location: "", id:"7"},
  {visible: true, name: "Burt Bear", profilePic: "assets/animals/kitten.jpg",about: " " , location: "", id:"8"},
  {visible: true, name: "Burt Bear", profilePic: "assets/animals/lion.jpg", about: " " ,location: "", id:"9"},
  {visible: true, name: "Burt Bear", profilePic: "assets/animals/mouse.jpg", about: " " ,location: "", id:"10"},
  {visible: true, name: "Burt Bear", profilePic: "assets/animals/puppy.jpg", about: " " ,location: "", id:"11"},
  {visible: true, name: "Burt Bear", profilePic: "assets/animals/rabbit.jpg", about: " " ,location: "", id:"12"},
  {visible: true, name: "Burt Bear", profilePic: "assets/animals/turtle.jpg",about: " " , location: "", id:"13"},
  
  
  {}]

  constructor() { }
}
