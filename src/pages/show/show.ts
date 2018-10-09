import { Component } from '@angular/core';
import {AlertController, NavController, NavParams} from 'ionic-angular';
import {EventType, TrackType} from "../../constants/types";

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
  tracks: TrackType[] = [
    { artist: 'Within Temptation', name: 'She\'s in love with herself' },
    { artist: 'Within Temptation', name: 'She likes the dark' },
    { artist: 'Within Temptation', name: 'On her milk white neck' },
    { artist: 'Within Temptation', name: 'The Devil\'s mark' },
    { artist: 'Within Temptation', name: 'It\'s all Hallows Eve' },
    { artist: 'Within Temptation', name: 'The moon is full' },
    { artist: 'Within Temptation', name: 'Will she trick or treat' },
    { artist: 'Within Temptation', name: 'I bet she will' },
    { artist: 'Within Temptation', name: 'She\'s got date at midnight' },
    { artist: 'Within Temptation', name: 'With Nosferatu' },
    { artist: 'Within Temptation', name: 'Oh baby, Lilly Munster' },
    { artist: 'Within Temptation', name: 'Ain\'t got nothing on you' },
    { artist: 'Within Temptation', name: 'Well when I called her evil' },
    { artist: 'Within Temptation', name: 'She just laughed' },
    { artist: 'Within Temptation', name: 'And cast that spell on me' },
    { artist: 'Within Temptation', name: 'Boo Bitch Craft' },
    { artist: 'Within Temptation', name: 'Yeah you wanna go out \'cause it\'s raining and blowing' },
    { artist: 'Within Temptation', name: 'You can\'t go out \'cause your roots are showing' },
    { artist: 'Within Temptation', name: 'Dye em black' },
    { artist: 'Within Temptation', name: 'Black no. 1' },
    { artist: 'Within Temptation', name: 'Little wolf skin boots' },
    { artist: 'Within Temptation', name: 'And clove cigarettes' },
    { artist: 'Within Temptation', name: 'An erotic funeral' },
    { artist: 'Within Temptation', name: 'For witch she\'s dressed' },
    { artist: 'Within Temptation', name: 'Her perfume smells like' },
    { artist: 'Within Temptation', name: 'Burning leaves' },
    { artist: 'Within Temptation', name: 'Everyday is Halloween' },
    { artist: 'Within Temptation', name: 'Loving you was like loving the dead' }
  ];

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              private alertCtrl: AlertController) {
    this.event = navParams.get('event');
    if (this.event == undefined) { this.navCtrl.goToRoot({}) }
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
