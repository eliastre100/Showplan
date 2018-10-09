import {Component, Input} from '@angular/core';
import {TrackType} from "../../constants/types";
import {AlertController} from "ionic-angular";

/**
 * Generated class for the TrackItemComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'track-item',
  templateUrl: 'track-item.html'
})
export class TrackItemComponent {
  @Input() track: TrackType;

  constructor(private alertCtrl: AlertController) {
  }

  play() {
    this.alert('track', 'track will be played on Spotify in a future update')
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
