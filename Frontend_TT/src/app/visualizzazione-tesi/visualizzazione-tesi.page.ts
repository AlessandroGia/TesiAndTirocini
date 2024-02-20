import { Component, OnInit, ViewChild } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { IonModal, NavController } from '@ionic/angular';

@Component({
  selector: 'app-visualizzazione-tesi',
  templateUrl: './visualizzazione-tesi.page.html',
  styleUrls: ['./visualizzazione-tesi.page.scss'],
})
export class VisualizzazioneTesiPage implements OnInit {
  @ViewChild('modalCorrelatori', { static: true }) modalCorrelatori!: IonModal;

  titolo: string;
  insegnamento: string;
  corsoDiStudi: string;
  relatore: string;
  //correlatori: Array<string>;
  dataDiscussione: string

  interni: any[] = [
    { id: 1, nome: 'Michele Guerra' },
    { id: 2, nome: 'Giulio Garbi' },
    { id: 3, nome: 'Emanuela Guglielmi' },
    { id: 4, nome: 'Giulia Varriano' },
    { id: 5, nome: 'Vittoria Nardone' },
    { id: 6, nome: 'Roberto Milanese' }
  ];

  ricercaInterni: any[] = [...this.interni];

  cancelCorrelatori() {
    this.correlatoriSelezionati = [...this.vecchiCorrelatori];
    this.ricercaInterni = [...this.interni];
    this.modalCorrelatori.dismiss(null, 'cancel');
  }

  correlatoriSelezionati: string[] = [];
  private vecchiCorrelatori: string[] = [];
  correlatori: string = "";

  ngOnInit() {
    
  }

  boxCorrelatori() {
    if (this.correlatoriSelezionati.length === 0) {
      return "";
    } else if (this.correlatoriSelezionati.length === 1) {
      return this.correlatoriSelezionati[0];
    } else {
      return this.correlatoriSelezionati.length + " correlatori selezionati";
    }
  }

  confirmCorrelatori() {  
    this.correlatori = this.boxCorrelatori()
    this.vecchiCorrelatori = [...this.correlatoriSelezionati];
    this.ricercaInterni = [...this.interni];
    this.modalCorrelatori.dismiss(null, 'confirm');
  }

  constructor(private alertController: AlertController) { 
    
    this.correlatoriSelezionati = ['Giulio Garbi']
    this.correlatori = this.boxCorrelatori()
    this.titolo = "F1"
    this.insegnamento = "Fluido Dinamica";
    this.corsoDiStudi = "Ingegneria Meccanica"
    this.relatore = "Fabio Fante"
    this.dataDiscussione = "01/01/2022"
  }

  handleInputC(event: any) {
    const query = event.target.value.toLowerCase();
    this.ricercaInterni = this.interni.filter((d) => d.nome.toLowerCase().indexOf(query) > -1);
  }

  gestisciCheckbox(event: any, nome: string) {
    if (event.target.checked) {
      if (this.correlatoriSelezionati.length < 3) {
        this.correlatoriSelezionati.push(nome);
      } else {
        event.target.checked = false;
      }
    } else {
      const index = this.correlatoriSelezionati.indexOf(nome);
      if (index !== -1) {
        this.correlatoriSelezionati.splice(index, 1);
      }
    }
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

  cambiaTitolo(nuovoTitolo: string) {
    if (nuovoTitolo !== '') {
      this.titolo = nuovoTitolo
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



}
