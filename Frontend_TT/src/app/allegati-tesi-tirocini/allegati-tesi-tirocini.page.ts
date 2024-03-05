import { Component, OnInit } from '@angular/core';
import { IonModal, NavController } from '@ionic/angular';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-allegati-tesi-tirocini',
  templateUrl: './allegati-tesi-tirocini.page.html',
  styleUrls: ['./allegati-tesi-tirocini.page.scss'],
})
export class AllegatiTesiTirociniPage implements OnInit {

  allegati: Array<any> = [{nome: 'Del PIEROOOO', id: 10}]

  constructor(public router: RouterModule, private navCtr: NavController) {
    this.allegati = [
      {nome: 'Pres. tesi', id: 10}
    ]
  }

  ngOnInit() {

    if (history.state.tesi == 1) {
      // caricare l'array "allegati" con oggetti di tipo {NomeAllegato, IdAllegato} di tesi
    } else {
      // caricare l'array "allegati" con oggetti di tipo {NomeAllegato, IdAllegato} di tirocini
    }
    
  }

  apriAllegato(id: number) {
    this.navCtr.navigateForward(['/visualizzazione-allegato'], { state: {id} })
  }

  aggiungiAllegato() {
    this.navCtr.navigateForward(['/creazione-allegato'], { state: {tesi: history.state.tesi} })
  }

}
