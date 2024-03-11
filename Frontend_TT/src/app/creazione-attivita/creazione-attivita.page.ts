import { Component, OnInit, ViewChild } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-creazione-attivita',
  templateUrl: './creazione-attivita.page.html',
  styleUrls: ['./creazione-attivita.page.scss'],
})
export class CreazioneAttivitaPage implements OnInit {

  data: string;
  dataFormattata: string;
  showCalendar: boolean;

  orarioE: string;
  orarioEFormattato: string;
  showTimeE: boolean;

  orarioU: string;
  orarioUFormattato: string;
  showTimeU: boolean;

  durata: string;
  nota: string;

  constructor(private navCtrl: NavController) { 
    this.data = new Date().toISOString();
    this.dataFormattata = "";
    this.showCalendar = false;

    this.orarioE = "";
    this.orarioEFormattato = "";
    this.showTimeE = false;

    this.orarioU = "";
    this.orarioUFormattato = "";
    this.showTimeU = false;

    this.durata = "";
    this.nota = "";
  }
  
  ngOnInit() {}

  openCalendar() {
    this.showCalendar = true;
  }

  cancelCalendar() {
    this.showCalendar = false;
  }

  public aggiornaData() {
    const date = new Date(this.data);

    const day = date.getDate();
    const month = date.getMonth() + 1;
    const year = date.getFullYear();

    this.dataFormattata = `${day.toString().padStart(2, '0')}/${month.toString().padStart(2, '0')}/${year}`;
  }

  public openTimeE() {
    this.showTimeE = true;
  }

  public cancelTimeE() {
    this.showTimeE = false;
  }

  public aggiornaOrarioE(event: any) {
    const time = new Date(event.detail.value);

    const hours = time.getHours().toString().padStart(2, '0');
    const minutes = time.getMinutes().toString().padStart(2, '0');

    this.orarioEFormattato = `${hours}:${minutes}`;

    this.calcolaDurata();
  }

  public openTimeU() {
    this.showTimeU = true;
  }

  public cancelTimeU() {
    this.showTimeU = false;
  }

  public aggiornaOrarioU(event: any) {
    const time = new Date(event.detail.value);

    const hours = time.getHours().toString().padStart(2, '0');
    const minutes = time.getMinutes().toString().padStart(2, '0');

    this.orarioUFormattato = `${hours}:${minutes}`;

    this.calcolaDurata();
  }

  private calcolaDurata() {
    if (this.orarioEFormattato != "" && this.orarioUFormattato != "") {
      const entrataArray = this.orarioEFormattato.split(':');
      const uscitaArray = this.orarioUFormattato.split(':');

      const oreEntrata = parseInt(entrataArray[0], 10);
      const minutiEntrata = parseInt(entrataArray[1], 10);

      const oreUscita = parseInt(uscitaArray[0], 10);
      const minutiUscita = parseInt(uscitaArray[1], 10);

      let ore = oreUscita - oreEntrata;
      let minuti = minutiUscita - minutiEntrata;

      if (minuti < 0) {
        ore--;
        minuti += 60;
      }

      if (ore >= 0) {
        this.durata = `${ore} ore, ${minuti} minuti`
      }
    }
  }

  conferma() {
    // query per la creazione dell'attività

    this.navCtrl.navigateForward(['/elenco-attivita-tirocinio']);
  }
}