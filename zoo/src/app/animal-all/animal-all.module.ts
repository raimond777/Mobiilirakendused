import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AnimalAllPageRoutingModule } from './animal-all-routing.module';

import { AnimalAllPage } from './animal-all.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AnimalAllPageRoutingModule
  ],
  declarations: [AnimalAllPage]
})
export class AnimalAllPageModule {}
