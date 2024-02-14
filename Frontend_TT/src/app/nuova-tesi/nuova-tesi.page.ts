import { Component, OnInit, ViewChild } from '@angular/core';
import { IonModal } from '@ionic/angular';

@Component({
  selector: 'app-nuova-tesi',
  templateUrl: './nuova-tesi.page.html',
  styleUrls: ['./nuova-tesi.page.scss'],
})
export class NuovaTesiPage implements OnInit {
  @ViewChild('modal', { static: true }) modal!: IonModal;

  constructor() { }

  ngOnInit() {
  }

  insegnamentoSelezionato: string = "";

  insegnamenti: any[] = [
    { id: 1, nome: 'Ingegneria del Software' },
    { id: 2, nome: 'Algoritmi e Strutture Dati' },
    { id: 3, nome: 'Programmazione I' },
    { id: 4, nome: 'Programmazione II' },
    { id: 5, nome: 'Logica e Fondamenti di Informatica' },
    { id: 6, nome: 'Architettura degli Elaboratori' },
    { id: 7, nome: 'Sistemi Operativi' }
  ];

  risultati: any[] = [...this.insegnamenti];

  cancel() {
    this.modal.dismiss(null, 'cancel');
  }

  confirm() {
    this.modal.dismiss(null, 'confirm');
  }

  handleInput(event: any) {
    const query = event.target.value.toLowerCase();
    this.risultati = this.insegnamenti.filter((d) => d.nome.toLowerCase().indexOf(query) > -1);
  }
}