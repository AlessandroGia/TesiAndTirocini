import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home-studente-tesi',
  templateUrl: './home-studente-tesi.page.html',
  styleUrls: ['./home-studente-tesi.page.scss'],
})
export class HomeStudenteTesiPage implements OnInit {

  constructor(public navCtrl: NavController,
    private router: Router) { }

  ngOnInit() {
  }

  public logOut() {
    this.router.navigate(['/login']);
  }

  public tirocinio() {
    this.router.navigate(['/home-studente-tirocinio']);
  }

}