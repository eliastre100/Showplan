import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
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

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  addEvent() {
    this.errorMsg = '';
    console.log(this.event);
    if (this.event.artist == '' || this.event.venue == '' || this.event.datetime == null) {
      this.errorMsg = 'All fields have to be filled';
      return;
    }
  }

}
