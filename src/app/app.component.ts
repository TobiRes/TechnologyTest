import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { Push, PushObject, PushOptions } from "@ionic-native/push";
import { AlertController } from "ionic-angular";


import { HomePage } from '../pages/home/home';
import {QrscanPage} from "../pages/qrscan/qrscan";
import {MapPage} from "../pages/map/map";
import {SharingPage} from "../pages/sharing/sharing";


@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any = HomePage;

  pages: Array<{title: string, component: any}>;

  constructor(public platform: Platform, public statusBar: StatusBar, public splashScreen: SplashScreen, public push: Push, public alertCtrl: AlertController) {
    this.initializeApp();

    // used for an example of ngFor and navigation
    this.pages = [
      { title: 'Home', component: HomePage },
      { title: 'QR Code Scanner', component: QrscanPage },
      { title: 'Map', component: MapPage},
      { title: 'Sharing', component: SharingPage}
    ];
    this.pushsetup();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component);
  }

  pushsetup() {
    const options: PushOptions = {
      android: {
      },
      ios: {
        alert: 'true',
        badge: true,
        sound: 'false'
      },
      windows: {},
      browser: {
        pushServiceURL: 'http://push.api.phonegap.com/v1/push'
      }
    };

    const pushObject: PushObject = this.push.init(options);

    pushObject.on('notification').subscribe((notification: any) => {
      //if App in foreground
      if(notification.additionalData.foreground){
        let youralert = this.alertCtrl.create({
          title: "New Push Notification",
          message: notification.message
        });
        youralert.present();
      }
    });

    pushObject.on('registration').subscribe((registration: any) => alert('Device registered' + registration));

    pushObject.on('error').subscribe(error => alert('Error with Push plugin' + error));
  }
}
