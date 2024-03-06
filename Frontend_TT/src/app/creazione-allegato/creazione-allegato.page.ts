import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-creazione-allegato',
  templateUrl: './creazione-allegato.page.html',
  styleUrls: ['./creazione-allegato.page.scss'],
})
export class CreazioneAllegatoPage implements OnInit {

  notaTemp: string = "";
  tipologia: string = "";

  constructor() { 

  }
  

  ngOnInit() {
    if (history.state.tesi == 1) {
      // fare la query di aggiunta allegato su tesi
    } else {
      // fare la query di aggiunta allegato su tirocini
    }
  }

  confermaModifiche() {
    // query per la creazione dell'allegato
  }



}
