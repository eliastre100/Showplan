import { Component } from '@angular/core';
import { Storage } from "@ionic/storage";
import { NavController } from 'ionic-angular';
import { NewPage  } from "../new/new";
import { EventType } from "../../constants/types";

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  errorMsg = '';
  events: EventType[] = [];

  constructor(public navCtrl: NavController,
              private storage: Storage) {

  }

  ionViewWillEnter() {
    this.storage.get('events').then((events: EventType[]) => {
      this.events = events;
    }).catch(() => {
      this.errorMsg = 'Unable to load events';
    })
  }

  add() {
    this.navCtrl.push(NewPage)
  }

}
