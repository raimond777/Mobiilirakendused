import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Tab2Page } from './tab2.page';

const routes: Routes = [
  {
    path: '',
    component: Tab2Page,
  },
  {
    path: 'hero-view/:heroId',
    loadChildren: () => import
    ('./hero-view/hero-view.module')
    .then( m => m.HeroViewPageModule)
  },
  {
    path: 'hero-edit/:heroId',
    loadChildren: () => import('./hero-edit/hero-edit.module').then( m => m.HeroEditPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Tab2PageRoutingModule {}
