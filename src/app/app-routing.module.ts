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
    path: 'exercicio',
    loadChildren: () => import('./pages/exercicio/exercicio.module').then( m => m.ExercicioPageModule)
  },
  {
    path: 'academico',
    loadChildren: () => import('./pages/academico/academico.module').then( m => m.AcademicoPageModule)
  },
  {
    path: 'pessoal',
    loadChildren: () => import('./pages/pessoal/pessoal.module').then( m => m.PessoalPageModule)
  },
  
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
