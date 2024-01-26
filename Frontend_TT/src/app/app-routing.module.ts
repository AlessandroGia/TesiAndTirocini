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
    path: 'login',
    loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'home-studente-tesi',
    loadChildren: () => import('./home-studente-tesi/home-studente-tesi.module').then( m => m.HomeStudenteTesiPageModule)
  },
  {
    path: 'home-studente-tirocinio',
    loadChildren: () => import('./home-studente-tirocinio/home-studente-tirocinio.module').then( m => m.HomeStudenteTirocinioPageModule)
  },
  {
    path: 'nuova-tesi',
    loadChildren: () => import('./nuova-tesi/nuova-tesi.module').then( m => m.NuovaTesiPageModule)
  },
  {
    path: 'seleziona-insegnamento-modal',
    loadChildren: () => import('./seleziona-insegnamento-modal/seleziona-insegnamento-modal.module').then( m => m.SelezionaInsegnamentoModalPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
