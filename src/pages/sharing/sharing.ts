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

  share(){
    alert("test");
    var options = {
      message: "Share this",
      subject: "This subject",
      files: ["", ""],
      chooserTitle: "Pick an app"
    }

    var onSuccess = function(result) {
      alert("Alert");
      console.log("Share completed? " + result.completed); // On Android apps mostly return false even while it's true
      console.log("Shared to app: " + result.app); // On Android result.app is currently empty. On iOS it's empty when sharing is cancelled (result.completed=false)
    }

    var onError = function(msg) {
      alert("Alert");
      console.log("Sharing failed with message: " + msg);
    }

    window['plugins'].socialSharing.shareWithOptions(options, onSuccess, onError);
  }


}
