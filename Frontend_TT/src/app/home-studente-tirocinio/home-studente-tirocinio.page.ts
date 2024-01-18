import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-home-studente-tirocinio',
  templateUrl: './home-studente-tirocinio.page.html',
  styleUrls: ['./home-studente-tirocinio.page.scss'],
})
export class HomeStudenteTirocinioPage implements OnInit {

  constructor(public navCtrl: NavController) { }

  ngOnInit() {
  }

  public logOut() {
    this.navCtrl.navigateBack(['/login']);
  }

  public navigaTesi() {
    this.navCtrl.navigateBack(['/home-studente-tesi']);
  }

}
