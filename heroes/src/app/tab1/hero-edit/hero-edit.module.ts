import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HeroEditPageRoutingModule } from './hero-edit-routing.module';

import { HeroEditPage } from './hero-edit.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    HeroEditPageRoutingModule
  ],
  declarations: [HeroEditPage]
})
export class HeroEditPageModule {}
