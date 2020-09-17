import { Component } from '@angular/core';
import { ItemsService } from '../items.service';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

  clothes;

  constructor(private itemsService: ItemsService) {}
  
  
  ionViewWillEnter(){
    console.log(this.clothes)
    this.clothes=this.itemsService.clothes
    console.log(this.clothes)
  }

}
