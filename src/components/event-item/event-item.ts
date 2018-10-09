import { Component, Input } from '@angular/core';
import { EventType } from "../../constants/types";
import { AlertController } from "ionic-angular";

/**
 * Generated class for the EventItemComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'event-item',
  templateUrl: 'event-item.html'
})
export class EventItemComponent {
  @Input() event: EventType;

  constructor(private alertCtrl: AlertController) {
  }

  playTracklist() {
    this.alert('setlist', 'Setlist will be played on Spotify in a future update')
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
