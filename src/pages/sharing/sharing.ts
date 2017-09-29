import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { SocialSharing } from "@ionic-native/social-sharing";

/**
 * Generated class for the SharingPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-sharing',
  templateUrl: 'sharing.html',
})
export class SharingPage {


  constructor(public navCtrl: NavController, public navParams: NavParams, private socialSharing: SocialSharing) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SharingPage');
  }

  share(item){
    this.socialSharing.share("Check this feature:  techtest://techtest.com/" + item)
      .then(() => {
      })
      .catch(() => {
      });
  }


}
