import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home-studente-tirocinio',
  templateUrl: './home-studente-tirocinio.page.html',
  styleUrls: ['./home-studente-tirocinio.page.scss'],
})
export class HomeStudenteTirocinioPage implements OnInit {

  constructor(public navCtrl: NavController,
    private router: Router) { }

  ngOnInit() {
  }

  public logOut() {
    this.router.navigate(['/login']);
  }

  public navigaTesi() {
    this.router.navigate(['/home-studente-tesi']);
  }

}
