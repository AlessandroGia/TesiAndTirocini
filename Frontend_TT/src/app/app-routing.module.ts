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
    path: 'visualizzazione-tesi',
    loadChildren: () => import('./visualizzazione-tesi/visualizzazione-tesi.module').then( m => m.VisualizzazioneTesiPageModule)
  },  {
    path: 'allegati-tesi-tirocini',
    loadChildren: () => import('./allegati-tesi-tirocini/allegati-tesi-tirocini.module').then( m => m.AllegatiTesiTirociniPageModule)
  },
  {
    path: 'visualizzazione-allegato',
    loadChildren: () => import('./visualizzazione-allegato/visualizzazione-allegato.module').then( m => m.VisualizzazioneAllegatoPageModule)
  },
  {
    path: 'creazione-allegato',
    loadChildren: () => import('./creazione-allegato/creazione-allegato.module').then( m => m.CreazioneAllegatoPageModule)
  },


];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
