import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { IonRouterOutlet, Platform } from '@ionic/angular';
import { LoginServiceService } from '../services/login-service/login-service.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  // Variabili utilizzate per ricevere gli input dagli ion-input
  userName: string = "";
  password: string = "";

  // Variabile utilizzata per la disattivazione del backButton dell'hardware
  private backButtonSubscription: any;

  isToastOpen = false;

  constructor(private routerOutlet: IonRouterOutlet,
    private platform: Platform,
    public navCtrl: NavController,
    private loginService: LoginServiceService) { }

  ngOnInit() {}

  ionViewCanLeave(): boolean {
    return false;
  }

  // All'entrata nella pagina disattiviamo il backButton dell'hardware (Android) e lo swipe (iOS)
  ionViewDidEnter() {
    this.routerOutlet.swipeGesture = false;
    this.backButtonSubscription = this.platform.backButton.subscribeWithPriority(100, () => { });
  }

  // All'uscita dalla pagina ripristiniamo il backButton dell'hardware (Android) e lo swipe (iOS)
  ionViewDidLeave() {
    this.routerOutlet.swipeGesture = true;
    this.backButtonSubscription.unsubscribe();
  }
  setOpen(isOpen: boolean) {
    this.isToastOpen = isOpen;
  }

  public accedi() {

    this.loginService.login(
      this.userName, this.password
    ).subscribe({
        next: (val) => {
          console.log(val)
          this.navCtrl.navigateForward(['/home-studente-tesi']);
        },
        error: (err) => {
          this.setOpen(true)
        }
      }
    )
      
  }

}
