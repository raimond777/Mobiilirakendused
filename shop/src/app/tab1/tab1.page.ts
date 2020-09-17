import { Component } from '@angular/core';
import { ItemsService } from '../items.service';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {
 shops;

  constructor(private itemsService: ItemsService) {}
  
  
  ionViewWillEnter(){
    console.log(this.shops)
    this.shops=this.itemsService.shops
    console.log(this.shops)
  }
  

}
