import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-visualizzazione-attivita',
  templateUrl: './visualizzazione-attivita.page.html',
  styleUrls: ['./visualizzazione-attivita.page.scss'],
})
export class VisualizzazioneAttivitaPage implements OnInit {

  data: string;
  orarioEntrata: string;
  orarioUscita: string;
  durata: string;
  nota: string;

  constructor(private alertController: AlertController) {
    this.data = "08/03/2024";
    this.orarioEntrata = "09:00";
    this.orarioUscita = "15:00";
    this.durata = "6 ore, 0 minuti";
    this.nota = "Sviluppo frontend applicazione";
  }

  ngOnInit() {}

  async eliminaAttivita() {
    const alert = await this.alertController.create({
      header: "Confermi di voler eliminare l'attività?",
      buttons: [
        {
          text: 'Annulla',
          role: 'cancel',
        },
        {
          text: 'OK',
          role: 'confirm',
        },
      ],
    });

    await alert.present();
  }

}