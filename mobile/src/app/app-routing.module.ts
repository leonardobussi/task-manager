import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'tasks',
    loadChildren: () => import('./principal/tasks/tasks.module').then( m => m.TasksPageModule)
  },
  {
    path: 'visualizar',
    loadChildren: () => import('./principal/visualizacao/visualizacao.module').then( m => m.VisualizacaoPageModule)
  },
  {
    path: 'editar',
    loadChildren: () => import('./principal/edicao/edicao.module').then( m => m.EdicaoPageModule)
  },
  {
    path: 'criar',
    loadChildren: () => import('./principal/criacao/criacao.module').then( m => m.CriacaoPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
