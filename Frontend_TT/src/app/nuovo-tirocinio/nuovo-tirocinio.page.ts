import { Component, OnInit, ViewChild } from '@angular/core';
import { IonModal, NavController } from '@ionic/angular';

@Component({
  selector: 'app-nuovo-tirocinio',
  templateUrl: './nuovo-tirocinio.page.html',
  styleUrls: ['./nuovo-tirocinio.page.scss'],
})
export class NuovoTirocinioPage implements OnInit {
  @ViewChild('modalLaboratorio', { static: true }) modalLaboratorio!: IonModal;
  @ViewChild('modalTutor', { static: true }) modalTutor!: IonModal;
  @ViewChild('modalCollaboratori', { static: true }) modalCollaboratori!: IonModal;

  laboratorioSelezionato: string;
  private vecchioLaboratorio: string;

  tutorSelezionato: string;
  private vecchioTutor: string;

  durataTirocinio: string;

  collaboratoriSelezionati: string[];
  private vecchiCollaboratori: string[];
  collaboratori: string;

  laboratori: any[] = [
    { id: 1, nome: 'Spike Lab' },
    { id: 2, nome: 'Pac Lab' },
    { id: 3, nome: 'DataSound' },
    { id: 4, nome: 'Laboratorio di Radiomica' },
  ];

  docenti: any[] = [
    { id: 1, nome: 'Fausto Fasano' },
    { id: 2, nome: 'Gennaro Parlato' },
    { id: 3, nome: 'Rocco Oliveto' },
    { id: 4, nome: 'Simone Scalabrino' },
    { id: 5, nome: 'Antonella Santone' }
  ];

  interni: any[] = [
    { id: 1, nome: 'Michele Guerra' },
    { id: 2, nome: 'Giulio Garbi' },
    { id: 3, nome: 'Emanuela Guglielmi' },
    { id: 4, nome: 'Giulia Varriano' },
    { id: 5, nome: 'Vittoria Nardone' },
    { id: 6, nome: 'Roberto Milanese' }
  ];

  ricercaLaboratori: any[];
  ricercaDocenti: any[];
  ricercaInterni: any[];

  constructor(private navCtrl: NavController) {
    this.laboratorioSelezionato = "";
    this.vecchioLaboratorio = "";
    this.tutorSelezionato = "";
    this.vecchioTutor = "";

    this.durataTirocinio = "";

    this.collaboratoriSelezionati = [];
    this.vecchiCollaboratori = [];
    this.collaboratori = "";

    this.ricercaLaboratori = [...this.laboratori];
    this.ricercaDocenti = [...this.docenti];
    this.ricercaInterni = [...this.interni];
  }

  ngOnInit() {
  }

  cancelLaboratorio() {
    this.laboratorioSelezionato = this.vecchioLaboratorio;
    this.ricercaLaboratori = [...this.laboratori];
    this.modalLaboratorio.dismiss(null, 'cancel');
  }

  cancelTutor() {
    this.tutorSelezionato = this.vecchioTutor;
    this.ricercaDocenti = [...this.docenti];
    this.modalTutor.dismiss(null, 'cancel');
  }

  cancelCollaboratori() {
    this.collaboratoriSelezionati = [...this.vecchiCollaboratori];
    this.ricercaInterni = [...this.interni];
    this.modalCollaboratori.dismiss(null, 'cancel');
  }

  confirmLaboratorio() {
    this.vecchioLaboratorio = this.laboratorioSelezionato;
    this.ricercaLaboratori = [...this.laboratori];
    this.modalLaboratorio.dismiss(null, 'confirm');
  }

  confirmTutor() {
    this.vecchioTutor = this.tutorSelezionato;
    this.ricercaDocenti = [...this.docenti];
    this.modalTutor.dismiss(null, 'confirm');
  }

  confirmCollaboratori() {
    if (this.collaboratoriSelezionati.length === 0) {
      this.collaboratori = "";
    } else if (this.collaboratoriSelezionati.length === 1) {
      this.collaboratori = this.collaboratoriSelezionati[0];
    } else {
      this.collaboratori = this.collaboratoriSelezionati.length + " collaboratori selezionati";
    }

    this.vecchiCollaboratori = [...this.collaboratoriSelezionati];
    this.ricercaInterni = [...this.interni];
    this.modalCollaboratori.dismiss(null, 'confirm');
  }

  handleInputL(event: any) {
    const query = event.target.value.toLowerCase();
    this.ricercaLaboratori = this.laboratori.filter((d) => d.nome.toLowerCase().indexOf(query) > -1);
  }

  handleInputT(event: any) {
    const query = event.target.value.toLowerCase();
    this.ricercaDocenti = this.docenti.filter((d) => d.nome.toLowerCase().indexOf(query) > -1);
  }

  handleInputC(event: any) {
    const query = event.target.value.toLowerCase();
    this.ricercaInterni = this.interni.filter((d) => d.nome.toLowerCase().indexOf(query) > -1);
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

  navigaTirocinio() {
    this.navCtrl.navigateForward(['/home-studente-tirocinio']);
  }
}