import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { timeInterval } from 'rxjs';

@Component({
  selector: 'app-visualizzazione-allegato',
  templateUrl: './visualizzazione-allegato.page.html',
  styleUrls: ['./visualizzazione-allegato.page.scss'],
})
export class VisualizzazioneAllegatoPage implements OnInit {

  constructor(private alertController: AlertController) { }

  nomeAllegato = 'Pres. tesi'
  nomeAllegatoTemp = this.nomeAllegato

  nota = 'Es. nota'
  notaTemp = this.nota

  ngOnInit() {
    let id = 0
    if(history.state.id){
      id = history.state.id
    }
    console.log('id: ', id)
    //Fare la query per id
  }

  async presentTitoloAlert() {
    const alert = await this.alertController.create({
      header: 'Cambia titolo',
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
        },
        {
          text: 'OK',
          role: 'confirm',
          handler: (data: any) => {
            this.cambiaNomeAllegato(data.nome)
          },
        },
      ],
      inputs: [
        {
          placeholder: this.nomeAllegatoTemp,
          name: 'nome'
        }
      ],
    });

    await alert.present();
  }

  cambiaNomeAllegato(nuovoNome: string) {
    if (nuovoNome !== '') {
      this.nomeAllegatoTemp = nuovoNome
    }
  }

  eliminaAllegato() {
    // query per cancellare l'allegato
  }

  confermaModifiche() {
    this.nomeAllegato = this.nomeAllegatoTemp
    this.nota = this.notaTemp
    // query per l'update

    
  }



}
