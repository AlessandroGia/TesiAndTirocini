import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SelezionaInsegnamentoModalPage } from './seleziona-insegnamento-modal.page';

const routes: Routes = [
  {
    path: '',
    component: SelezionaInsegnamentoModalPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SelezionaInsegnamentoModalPageRoutingModule {}
