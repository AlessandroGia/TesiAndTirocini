import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-visualizzazione-tesi',
  templateUrl: './visualizzazione-tesi.page.html',
  styleUrls: ['./visualizzazione-tesi.page.scss'],
})
export class VisualizzazioneTesiPage implements OnInit {

  titolo: string;
  insegnamento: string;
  corsoDiStudi: string;
  relatore: string;
  correlatori: Array<string>;
  dataDiscussione: string



  constructor(private alertController: AlertController) { 
    this.titolo = "F1"
    this.insegnamento = "Fluido Dinamica";
    this.corsoDiStudi = "Ingegneria Meccanica"
    this.relatore = "Fabio Fante"
    this.correlatori = ["Gioacchino Belli", "Antonio Padovano"];
    this.dataDiscussione = "01/01/2022"
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
            console.log(data)
            this.cambiaTitolo(data.titolo)
          },
        },
      ],
      inputs: [
        {
          placeholder: 'Titolo',
          name: 'titolo'
        }
      ],
    });

    await alert.present();
  }

  async presentCorrelatoriAlert() {
    const alert = await this.alertController.create({
      header: 'Aggiungi correlatore',
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
        },
        {
          text: 'OK',
          role: 'confirm',
          handler: (data: any) => {
            console.log(data)
            this.aggiungiCorrelatore(data.nome)
          },
        },
      ],
      inputs: [
        {
          placeholder: 'Nome',
          name: 'nome'
        }
      ],
    });

    await alert.present();
  }

  public alertCorrelatoriButtons = [
    {
      text: 'Cancel',
      role: 'cancel',
    },
    {
      text: 'OK',
      role: 'confirm',
      handler: (data: any) => {
        this.aggiungiCorrelatore(data.nome);
      },
    },
  ]

  public alertCorrelatoriInputs = [
    {
      placeholder: "Nome",
      name: "nome"
    }
  ]

  cambiaTitolo(nuovoTitolo: string) {
    if (nuovoTitolo !== '') {
      this.titolo = nuovoTitolo
    }
  }

  elminaCorrelatore(correlatore: string) {
    
    this.correlatori.splice(
      this.correlatori.indexOf(correlatore), 1
    )
  }

  aggiungiCorrelatore(correlatore: string) {
    if (correlatore !== '') {
      this.correlatori.push(correlatore)
    }
    
  }

  async presentConcludiTesi() {
    const alert = await this.alertController.create({
      header: 'Confermi di aver discusso la tesi in data ' + this.dataDiscussione + '?',
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
        },
        {
          text: 'OK',
          role: 'confirm',
          handler: () => {
            this.concludiTesi();
          },
        },
      ],
    });

    await alert.present();
  }

  async presentEliminaTesi() {
    const alert = await this.alertController.create({
      header: 'Confermi di voler eliminare la tesi?',
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
        },
        {
          text: 'OK',
          role: 'confirm',
          handler: () => {
            this.eliminaTesi();
          },
        },
      ],
    });

    await alert.present();
  }

  concludiTesi() {

  }

  eliminaTesi() {

  }

  ngOnInit() {
  }

}
