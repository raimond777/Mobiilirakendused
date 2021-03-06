import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
  },
  {
    path: 'animal-detail/:animalId',
    loadChildren: () => import('./animal-detail/animal-detail.module').then( m => m.AnimalDetailPageModule)
  },
  {
    path: 'animal-all',
    loadChildren: () => import('./animal-all/animal-all.module').then( m => m.AnimalAllPageModule)
  }
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
