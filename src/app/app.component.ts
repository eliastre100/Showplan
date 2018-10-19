import { Component, ViewChild } from '@angular/core';
import {AlertController, Nav, Platform} from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { HomePage } from '../pages/home/home';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any = HomePage;

  services: Array<{title: string}>;


  constructor(public platform: Platform,
              public statusBar: StatusBar,
              public splashScreen: SplashScreen,
              private alertCtrl: AlertController) {
    this.initializeApp();

    this.services = [
      { title: 'Spotify' },
      { title: 'Genius' },
      { title: 'TicketMaster' }
    ]
  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  goHome() {
    this.nav.setRoot(HomePage);
  }

  linkService(service) {
    this.alert('Service link', 'Link to ' + service.title + ' will be added later on')
  }

  private alert(title: string, msg: string) {
    const alert = this.alertCtrl.create({
      title: title,
      subTitle: msg,
      buttons: ['Dismiss']
    });
    alert.present().catch((err) => {
      console.log(err);
    });
  }
}
