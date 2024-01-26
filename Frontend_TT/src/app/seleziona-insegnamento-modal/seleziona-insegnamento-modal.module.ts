import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SelezionaInsegnamentoModalPageRoutingModule } from './seleziona-insegnamento-modal-routing.module';

import { SelezionaInsegnamentoModalPage } from './seleziona-insegnamento-modal.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SelezionaInsegnamentoModalPageRoutingModule
  ],
  declarations: [SelezionaInsegnamentoModalPage]
})
export class SelezionaInsegnamentoModalPageModule {}
