import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BuyingOptionsPageRoutingModule } from './buying-options-routing.module';

import { BuyingOptionsPage } from './buying-options.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BuyingOptionsPageRoutingModule
  ],
  declarations: [BuyingOptionsPage]
})
export class BuyingOptionsPageModule {}
