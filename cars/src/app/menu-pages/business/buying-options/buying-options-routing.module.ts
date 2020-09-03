import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BuyingOptionsPage } from './buying-options.page';

const routes: Routes = [
  {
    path: '',
    component: BuyingOptionsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BuyingOptionsPageRoutingModule {}
