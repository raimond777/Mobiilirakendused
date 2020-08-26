import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HeroViewPageRoutingModule } from './hero-view-routing.module';

import { HeroViewPage } from './hero-view.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HeroViewPageRoutingModule
  ],
  declarations: [HeroViewPage]
})
export class HeroViewPageModule {}
