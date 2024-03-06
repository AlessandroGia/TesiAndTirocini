import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-home-studente-tesi',
  templateUrl: './home-studente-tesi.page.html',
  styleUrls: ['./home-studente-tesi.page.scss'],
})
export class HomeStudenteTesiPage implements OnInit {

  constructor(private navCtrl: NavController) { }

  ngOnInit() {
  }

  public logOut() {
    this.navCtrl.navigateBack(['/login']);
  }

  public navigaTirocinio() {
    this.navCtrl.navigateForward(['/home-studente-tirocinio']);
  }

  public creaNuovaTesi() {
    this.navCtrl.navigateForward(['/nuova-tesi']);
  }

  public visualizzaTesi() {
    this.navCtrl.navigateForward(['/visualizzazione-tesi']);
  }

}
