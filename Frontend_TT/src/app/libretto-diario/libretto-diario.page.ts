import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-libretto-diario',
  templateUrl: './libretto-diario.page.html',
  styleUrls: ['./libretto-diario.page.scss'],
})
export class LibrettoDiarioPage implements OnInit {

  dataInizio: string;
  dataIFormattata: string;
  dataFine: string;
  dataFFormattata: string;
  showCalendarI: boolean;
  showCalendarF: boolean;

  nota = "";

  constructor(private alertController: AlertController, private navCtrl: NavController) { 
    this.dataInizio = new Date().toISOString();
    this.dataFine = this.dataInizio;
    this.dataIFormattata = "";
    this.dataFFormattata = "";
    this.showCalendarI = false;
    this.showCalendarF = false;
  }

  ngOnInit() {}

  openCalendarI() {
    this.showCalendarI = true;
  }

  cancelCalendarI() {
    this.showCalendarI = false;
  }

  openCalendarF() {
    this.showCalendarF = true;
  }

  cancelCalendarF() {
    this.showCalendarF = false;
  }

  public aggiornaDataI() {
    const date = new Date(this.dataInizio);

    const day = date.getDate();
    const month = date.getMonth() + 1;
    const year = date.getFullYear();

    this.dataIFormattata = `${day.toString().padStart(2, '0')}/${month.toString().padStart(2, '0')}/${year}`;
  }

  public aggiornaDataF() {
    const date = new Date(this.dataFine);

    const day = date.getDate();
    const month = date.getMonth() + 1;
    const year = date.getFullYear();

    this.dataFFormattata = `${day.toString().padStart(2, '0')}/${month.toString().padStart(2, '0')}/${year}`;
  }

  public genera() {
    this.navCtrl.navigateForward(['/visualizzazione-tirocinio']);
  }

}