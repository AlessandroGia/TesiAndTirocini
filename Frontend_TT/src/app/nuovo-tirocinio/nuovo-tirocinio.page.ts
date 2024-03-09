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

  laboratorioSelezionato: string;
  private vecchioLaboratorio: string;

  tutorSelezionato: string;
  private vecchioTutor: string;

  durataTirocinio: string;

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

  ricercaLaboratori: any[];
  ricercaDocenti: any[];

  constructor(private navCtrl: NavController) {
    this.laboratorioSelezionato = "";
    this.vecchioLaboratorio = "";
    this.tutorSelezionato = "";
    this.vecchioTutor = "";

    this.durataTirocinio = "";

    this.ricercaLaboratori = [...this.laboratori];
    this.ricercaDocenti = [...this.docenti];
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

  handleInputL(event: any) {
    const query = event.target.value.toLowerCase();
    this.ricercaLaboratori = this.laboratori.filter((d) => d.nome.toLowerCase().indexOf(query) > -1);
  }

  handleInputT(event: any) {
    const query = event.target.value.toLowerCase();
    this.ricercaDocenti = this.docenti.filter((d) => d.nome.toLowerCase().indexOf(query) > -1);
  }

  navigaTirocinio() {
    this.navCtrl.navigateForward(['/home-studente-tirocinio']);
  }
}