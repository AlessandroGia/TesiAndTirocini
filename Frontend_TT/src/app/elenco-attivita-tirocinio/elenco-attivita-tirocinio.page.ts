import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-elenco-attivita-tirocinio',
  templateUrl: './elenco-attivita-tirocinio.page.html',
  styleUrls: ['./elenco-attivita-tirocinio.page.scss'],
})
export class ElencoAttivitaTirocinioPage implements OnInit {

  elencoAttivita: Array<any>;

  constructor(private navCtrl: NavController) {
    this.elencoAttivita = [
      {data: '29/01/2024', durata: '6 ore', entrataUscita: '09:00 - 15:00', id: 10},
      {data: '29/02/2024', durata: '6 ore', entrataUscita: '09:00 - 15:00', id: 10},
      {data: '06/03/2024', durata: '6 ore', entrataUscita: '09:00 - 15:00', id: 10},
      {data: '07/03/2024', durata: '6 ore', entrataUscita: '09:00 - 15:00', id: 10},
      {data: '08/03/2024', durata: '6 ore', entrataUscita: '09:00 - 15:00', id: 10},
      {data: '11/03/2024', durata: '6 ore', entrataUscita: '09:00 - 15:00', id: 10}];
  }

  ngOnInit() {}

  apriAttivita(id: number) {
    this.navCtrl.navigateForward(['/visualizzazione-attivita'], { state: {id} });
  }

  aggiungiAttivita() {
    this.navCtrl.navigateForward(['/creazione-attivita'], { state: {tesi: history.state.tesi} });
  }

}
