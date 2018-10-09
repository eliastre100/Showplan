import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { Storage } from "@ionic/storage";
import { EventType } from '../../constants/types';

@Component({
  selector: 'page-new',
  templateUrl: 'new.html',
})
export class NewPage {
  event: EventType = {
    artist: '',
    venue: '',
    datetime: null
  };
  errorMsg = "";

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              private storage: Storage) {
  }

  async addEvent() {
    this.errorMsg = '';
    if (this.event.artist == '' || this.event.venue == '' || this.event.datetime == null) {
      this.errorMsg = 'All fields have to be filled';
      return;
    }
    let allEvents = await this.storage.get('events') || [];
    console.log(allEvents);
    allEvents.push(this.event);
    this.storage.set('events', allEvents);
    if (this.navCtrl.canGoBack()) {
      this.navCtrl.pop();
    } else {
      this.navCtrl.goToRoot({});
    }
  }
}
