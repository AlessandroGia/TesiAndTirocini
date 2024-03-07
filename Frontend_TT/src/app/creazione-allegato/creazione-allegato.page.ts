import { Component, OnInit, ViewChild } from '@angular/core';
import { IonModal, NavController } from '@ionic/angular';

@Component({
  selector: 'app-creazione-allegato',
  templateUrl: './creazione-allegato.page.html',
  styleUrls: ['./creazione-allegato.page.scss'],
})
export class CreazioneAllegatoPage implements OnInit {
  @ViewChild('modalTipologia', { static: true }) modalTipologia!: IonModal;

  notaTemp: string;

  tipologiaSelezionata: string;
  private vecchiaITipologia: string;

  tipologie: any[] = [
    { id: 1, nome: 'Abstract' },
    { id: 2, nome: 'Presentazione' },
    { id: 3, nome: 'Richiesta Tesi' },
    { id: 4, nome: 'Tesi' },
  ];

  ricercaTipologie: any[];

  constructor(private navCtrl: NavController) { 
    this.notaTemp = "";
    this.tipologiaSelezionata = "";
    this.vecchiaITipologia = "";

    this.ricercaTipologie = [...this.tipologie];
  }
  
  ngOnInit() {
    if (history.state.tesi == 1) {
      // fare la query di aggiunta allegato su tesi
    } else {
      // fare la query di aggiunta allegato su tirocini
    }
  }

  conferma() {
    // query per la creazione dell'allegato

    this.navCtrl.navigateForward(['/allegati-tesi-tirocini']);
  }

  cancelTipologia() {
    this.tipologiaSelezionata = this.vecchiaITipologia;
    this.ricercaTipologie = [...this.tipologie];
    this.modalTipologia.dismiss(null, 'cancel');
  }

  confirmTipologia() {
    this.vecchiaITipologia = this.tipologiaSelezionata;
    this.ricercaTipologie = [...this.tipologie];
    this.modalTipologia.dismiss(null, 'confirm');
  }

  handleInputT(event: any) {
    const query = event.target.value.toLowerCase();
    this.ricercaTipologie = this.tipologie.filter((d) => d.nome.toLowerCase().indexOf(query) > -1);
  }
}