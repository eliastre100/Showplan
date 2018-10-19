import { Component } from '@angular/core';
import { AlertController, NavController, NavParams } from 'ionic-angular';
import { EventType, TrackType } from "../../constants/types";
import { SetlistProvider } from "../../providers/setlist/setlist";

/**
 * Generated class for the ShowPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-show',
  templateUrl: 'show.html',
})
export class ShowPage {
  event: EventType;
  tracks: TrackType[] = [];

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              private alertCtrl: AlertController,
              private setlist: SetlistProvider) {
    this.event = navParams.get('event');
    if (this.event == undefined) { this.navCtrl.goToRoot({}) }
  }

  ngOnInit() {
    this.setlist.get(this.event.artist).then((songs) => {
      this.tracks = songs.map((song) => { return { name: song, artist: this.event.artist} })
    })
  }

  playTracklist() {
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
