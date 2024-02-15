import { Component, OnInit, ViewChild } from '@angular/core';
import { IonModal } from '@ionic/angular';

@Component({
  selector: 'app-nuova-tesi',
  templateUrl: './nuova-tesi.page.html',
  styleUrls: ['./nuova-tesi.page.scss'],
})
export class NuovaTesiPage implements OnInit {
  @ViewChild('modalInsegnamento', { static: true }) modalInsegnamento!: IonModal;
  @ViewChild('modalRelatore', { static: true }) modalRelatore!: IonModal;
  @ViewChild('modalCorrelatori', { static: true }) modalCorrelatori!: IonModal;

  insegnamentoSelezionato: string = "";
  private vecchioInsegnamento: string = "";

  relatoreSelezionato: string = "";
  private vecchioRelatore: string = "";

  correlatoriSelezionati: string[] = [];
  private vecchiCorrelatori: string[] = [];

  insegnamenti: any[] = [
    { id: 1, nome: 'Ingegneria del Software' },
    { id: 2, nome: 'Algoritmi e Strutture Dati' },
    { id: 3, nome: 'Programmazione I' },
    { id: 4, nome: 'Programmazione II' },
    { id: 5, nome: 'Logica e Fondamenti di Informatica' },
    { id: 6, nome: 'Architettura degli Elaboratori' },
    { id: 7, nome: 'Sistemi Operativi' }
  ];

  docenti: any[] = [
    { id: 1, nome: 'Fausto Fasano' },
    { id: 2, nome: 'Gennaro Parlato' },
    { id: 3, nome: 'Rocco Oliveto' },
    { id: 4, nome: 'Simone Scalabrino' },
    { id: 5, nome: 'Antonella Santone' },
    { id: 6, nome: 'Antonino Palomba' },
    { id: 7, nome: 'Fabrizio Perrone' }
  ];

  interni: any[] = [
    { id: 1, nome: 'Michele Guerra' },
    { id: 2, nome: 'Giulio Garbi' },
    { id: 3, nome: 'Emanuela Guglielmi' },
    { id: 4, nome: 'Giulia Varriano' },
    { id: 5, nome: 'Vittoria Nardone' },
    { id: 6, nome: 'Roberto Milanese' }
  ];

  ricercaInsegnamenti: any[] = [...this.insegnamenti];
  ricercaDocenti: any[] = [...this.docenti];
  ricercaInterni: any[] = [...this.interni];

  constructor() { }

  ngOnInit() {
  }

  cancelInsegnamento() {
    this.insegnamentoSelezionato = this.vecchioInsegnamento;
    this.ricercaInsegnamenti = [...this.insegnamenti];
    this.modalInsegnamento.dismiss(null, 'cancel');
  }

  cancelRelatore() {
    this.relatoreSelezionato = this.vecchioRelatore;
    this.ricercaDocenti = [...this.docenti];
    this.modalRelatore.dismiss(null, 'cancel');
  }

  cancelCorrelatori() {
    this.correlatoriSelezionati = this.vecchiCorrelatori;
    this.ricercaInterni = [...this.interni];
    this.modalCorrelatori.dismiss(null, 'cancel');
  }

  confirmInsegnamento() {
    this.vecchioInsegnamento = this.insegnamentoSelezionato;
    this.ricercaInsegnamenti = [...this.insegnamenti];
    this.modalInsegnamento.dismiss(null, 'confirm');
  }

  confirmRelatore() {
    this.vecchioRelatore = this.relatoreSelezionato;
    this.ricercaDocenti = [...this.docenti];
    this.modalRelatore.dismiss(null, 'confirm');
  }

  confirmCorrelatori() {
    this.vecchiCorrelatori = this.correlatoriSelezionati;
    this.ricercaInterni = [...this.interni];
    this.modalCorrelatori.dismiss(null, 'confirm');
  }

  handleInputI(event: any) {
    const query = event.target.value.toLowerCase();
    this.ricercaInsegnamenti = this.insegnamenti.filter((d) => d.nome.toLowerCase().indexOf(query) > -1);
  }

  handleInputR(event: any) {
    const query = event.target.value.toLowerCase();
    this.ricercaDocenti = this.docenti.filter((d) => d.nome.toLowerCase().indexOf(query) > -1);
  }

  handleInputC(event: any) {
    const query = event.target.value.toLowerCase();
    this.ricercaDocenti = this.docenti.filter((d) => d.nome.toLowerCase().indexOf(query) > -1);
  }
}