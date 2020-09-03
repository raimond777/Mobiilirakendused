import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AnimalAllPage } from './animal-all.page';

const routes: Routes = [
  {
    path: '',
    component: AnimalAllPage
  },
  {
    path: 'animal-edit/:animalId',
    loadChildren: () => import('./animal-edit/animal-edit.module').then( m => m.AnimalEditPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AnimalAllPageRoutingModule {}
