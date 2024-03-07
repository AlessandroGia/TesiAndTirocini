import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-visualizzazione-allegato',
  templateUrl: './visualizzazione-allegato.page.html',
  styleUrls: ['./visualizzazione-allegato.page.scss'],
})
export class VisualizzazioneAllegatoPage implements OnInit {

  constructor(private alertController: AlertController) { }

  alertFlag: boolean = false;

  nomeAllegato: string = '[Nome Allegato]';
  nomeAllegatoTemp: string = this.nomeAllegato;

  nota = "";
  notaTemp = this.nota

  tipologia: string = "Abstract";

  ngOnInit() {
    let id = 0
    if(history.state.id){
      id = history.state.id
    }
    console.log('id: ', id)
    //Fare la query per id
  }

  async presentTitoloAlert() {
    if (!this.alertFlag) {
      this.alertFlag = true;

      const alert = await this.alertController.create({
        header: 'Modifica Nome',
        buttons: [
          {
            text: 'Annulla',
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
            placeholder: "Nuovo nome",
            name: 'nome'
          }
        ],
      });

      await alert.present();

      this.alertFlag = false;
    }
  }

  cambiaNomeAllegato(nuovoNome: string) {
    if (nuovoNome !== '') {
      this.nomeAllegatoTemp = nuovoNome
    }
  }

  async eliminaAllegato() {
    const alert = await this.alertController.create({
      header: "Confermi di voler eliminare l'allegato?",
      buttons: [
        {
          text: 'Annulla',
          role: 'cancel',
        },
        {
          text: 'OK',
          role: 'confirm',
        },
      ],
    });

    await alert.present();
  }
}
