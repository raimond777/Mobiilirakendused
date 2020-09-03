import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BusinessService {
  [x: string]: any;
  business = [
  {title: 'Hooldus', description: 'Rihmade, rehvide, õlide vahetus', 
  picture: 'https://cdn1.iconfinder.com/data/icons/user-interface-colorful/48/wrench-512.png'},
  {title: 'Varuosad', description: 'Mootor, kere,',  
  picture: 'https://cdn4.iconfinder.com/data/icons/web-and-office-tools-set-2/512/SETTINGS-512.png'}
  ];

  constructor() { }
}
