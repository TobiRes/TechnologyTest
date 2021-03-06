import { BrowserModule } from '@angular/platform-browser';
import {CUSTOM_ELEMENTS_SCHEMA, ErrorHandler, NgModule} from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import {QrscanPage} from "../pages/qrscan/qrscan";
import { MapPage } from "../pages/map/map";
import { SharingPage } from "../pages/sharing/sharing";

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { NgxQRCodeModule} from "ngx-qrcode2";
import { BarcodeScanner } from "@ionic-native/barcode-scanner";
import { Push } from "@ionic-native/push";
import { Geolocation } from "@ionic-native/geolocation";
import { AgmCoreModule } from "@agm/core";
import { SocialSharing } from "@ionic-native/social-sharing";
import { Deeplinks } from "@ionic-native/deeplinks";



@NgModule({
  declarations: [
    MyApp,
    HomePage,
    QrscanPage,
    MapPage,
    SharingPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    AgmCoreModule.forRoot({
      apiKey: "AIzaSyBR95g73UEZy9St09CwzL7Dk5AE4GVw6d8"
    }),
    NgxQRCodeModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    QrscanPage,
    MapPage,
    SharingPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    BarcodeScanner,
    Push,
    Geolocation,
    SocialSharing,
    Deeplinks
  ],
  schemas:  [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class AppModule {}
