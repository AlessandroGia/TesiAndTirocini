import { Component, OnInit, ViewChild } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { IonModal, NavController } from '@ionic/angular';

@Component({
  selector: 'app-visualizzazione-tirocinio',
  templateUrl: './visualizzazione-tirocinio.page.html',
  styleUrls: ['./visualizzazione-tirocinio.page.scss'],
})
export class VisualizzazioneTirocinioPage implements OnInit {
  @ViewChild('modalCollaboratori', { static: true }) modalCollaboratori!: IonModal;
  @ViewChild('modalTutorU', { static: true }) modalTutorU!: IonModal;

  laboratorio: string;
  corsoDiStudi: string;
  tutor: string;
  //collaboratori: Array<string>;
  completamento: string;
  dataPF: string;
  dataPFFormattata: string;
  showCalendar: boolean;

  tutorUniversitario: string;
  private vecchioTutorU: string;
  ricercaDocenti: any[];

  alertFlag: boolean = false;

  interni: any[] = [
    { id: 1, nome: 'Michele Guerra' },
    { id: 2, nome: 'Giulio Garbi' },
    { id: 3, nome: 'Emanuela Guglielmi' },
    { id: 4, nome: 'Giulia Varriano' },
    { id: 5, nome: 'Vittoria Nardone' },
    { id: 6, nome: 'Roberto Milanese' }
  ];

  docenti: any[] = [
    { id: 1, nome: 'Fausto Fasano' },
    { id: 2, nome: 'Gennaro Parlato' },
    { id: 3, nome: 'Rocco Oliveto' },
    { id: 4, nome: 'Simone Scalabrino' },
    { id: 5, nome: 'Giovanni Capobianco' }
  ];

  ricercaInterni: any[] = [...this.interni];

  collaboratoriSelezionati: string[] = [];
  private vecchiCollaboratori: string[] = [];
  collaboratori: string = "";

  constructor(private alertController: AlertController, private navCtrl: NavController) { 
    this.collaboratoriSelezionati = ['Giulia Varriano', 'Vittoria Nardone'];
    this.collaboratori = this.boxCollaboratori();
    this.laboratorio = "Laboratorio di Radiomica";
    this.corsoDiStudi = "Informatica";
    this.tutor = "Antonella Santone";
    this.completamento = "36 / 160 ore";
    this.dataPF = new Date().toISOString();
    this.tutorUniversitario = "Giovanni Capobianco";
    this.vecchioTutorU = "";
    this.ricercaDocenti = [...this.docenti];
    this.dataPFFormattata = "";
    this.showCalendar = false;
  }

  ngOnInit() {
    
  }

  boxCollaboratori() {
    if (this.collaboratoriSelezionati.length === 0) {
      return "";
    } else if (this.collaboratoriSelezionati.length === 1) {
      return this.collaboratoriSelezionati[0];
    } else {
      return this.collaboratoriSelezionati.length + " collaboratori selezionati";
    }
  }

  cancelCollaboratori() {
    this.collaboratoriSelezionati = [...this.vecchiCollaboratori];
    this.ricercaInterni = [...this.interni];
    this.modalCollaboratori.dismiss(null, 'cancel');
  }

  cancelTutorU() {
    this.tutorUniversitario = this.vecchioTutorU;
    this.ricercaDocenti = [...this.docenti];
    this.modalTutorU.dismiss(null, 'cancel');
  }

  confirmCollaboratori() {  
    this.collaboratori = this.boxCollaboratori()
    this.vecchiCollaboratori = [...this.collaboratoriSelezionati];
    this.ricercaInterni = [...this.interni];
    this.modalCollaboratori.dismiss(null, 'confirm');
  }

  confirmTutorU() {
    this.vecchioTutorU = this.tutorUniversitario;
    this.ricercaDocenti = [...this.docenti];
    this.modalTutorU.dismiss(null, 'confirm');
  }

  handleInputC(event: any) {
    const query = event.target.value.toLowerCase();
    this.ricercaInterni = this.interni.filter((d) => d.nome.toLowerCase().indexOf(query) > -1);
  }

  handleInputTU(event: any) {
    const query = event.target.value.toLowerCase();
    this.ricercaDocenti = this.docenti.filter((d) => d.nome.toLowerCase().indexOf(query) > -1);
  }

  gestisciCheckbox(event: any, nome: string) {
    if (event.target.checked) {
      if (this.collaboratoriSelezionati.length < 3) {
        this.collaboratoriSelezionati.push(nome);
      } else {
        event.target.checked = false;
      }
    } else {
      const index = this.collaboratoriSelezionati.indexOf(nome);
      if (index !== -1) {
        this.collaboratoriSelezionati.splice(index, 1);
      }
    }
  }

  async presentConcludiTirocinio() {
    const alert = await this.alertController.create({
      header: 'Confermi di aver discusso la tesi in data ' + this.dataPFFormattata + '?',
      buttons: [
        {
          text: 'Annulla',
          role: 'cancel',
        },
        {
          text: 'OK',
          role: 'confirm',
          handler: () => {
            this.concludiTirocinio();
          },
        },
      ],
    });

    await alert.present();
  }

  async presentEliminaTirocinio() {
    const alert = await this.alertController.create({
      header: 'Confermi di voler eliminare il tirocinio?',
      buttons: [
        {
          text: 'Annulla',
          role: 'cancel',
        },
        {
          text: 'OK',
          role: 'confirm',
          handler: () => {
            this.eliminaTirocinio();
          },
        },
      ],
    });

    await alert.present();
  }

  concludiTirocinio() {

  }

  eliminaTirocinio() {

  }

  visualizzaAllegati() {
    this.navCtrl.navigateForward(['/allegati-tesi-tirocini'], { state: {"tesi": 0} });
  }

  openCalendar() {
    this.showCalendar = true;
  }

  cancelCalendar() {
    this.showCalendar = false;
  }

  public aggiornaData() {
    const date = new Date(this.dataPF);

    const day = date.getDate();
    const month = date.getMonth() + 1;
    const year = date.getFullYear();

    this.dataPFFormattata = `${day.toString().padStart(2, '0')}/${month.toString().padStart(2, '0')}/${year}`;
  }

}