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

  addEvent() {
    this.errorMsg = '';
    if (!this.validateEvent(this.event)) { return }
    this.storeEvent(this.event).then(() => {
      this.goBack()
    }).catch(() => {
      this.errorMsg = 'An error occurred'
    });
  }

  // TODO: Make a more precise error detection
  private validateEvent(event: EventType): boolean {
    if (event.artist == '' || event.venue == '' || event.datetime == null) {
      this.errorMsg = 'All fields have to be filled';
      return false;
    }
    return true
  }

  private async storeEvent(event: any) {
    let allEvents = await this.storage.get('events') || [];
    allEvents.push(event);
    await this.storage.set('events', allEvents);
  }

  private goBack() {
    if (this.navCtrl.canGoBack()) {
      this.navCtrl.pop().catch(() => this.errorMsg = 'Unable to go back.');
    } else {
      this.navCtrl.goToRoot({}). catch(() => this.errorMsg = 'Unable to go back to home.');
    }
  }
}
