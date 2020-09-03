import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AnimalEditPageRoutingModule } from './animal-edit-routing.module';

import { AnimalEditPage } from './animal-edit.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AnimalEditPageRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [AnimalEditPage]
})
export class AnimalEditPageModule {}
