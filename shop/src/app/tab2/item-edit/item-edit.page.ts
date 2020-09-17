import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { ItemsService } from 'src/app/items.service';

@Component({
  selector: 'app-item-edit',
  templateUrl: './item-edit.page.html',
  styleUrls: ['./item-edit.page.scss'],
})
export class ItemEditPage implements OnInit {
id: number;
item;
form;

  constructor(private route: ActivatedRoute, private itemsService:  ItemsService) { }

  ngOnInit() {
    this.route.params.subscribe(parameeter=> {
      this.id=parameeter.itemId;
      
      })
      this.item= this.itemsService.clothes[this.id];
      this.form= new FormGroup({
        name: new FormControl (this.item.name),
        price: new FormControl (this.item.price), 
        size: new FormControl (this.item.size )
      });
            console.log (this.item);
    }
    onSubmit(){
      this.itemsService.clothes[this.id]=this.form.value;

    }

      
}
