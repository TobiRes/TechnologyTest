import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Geolocation } from "@ionic-native/geolocation";

/**
 * Generated class for the MapPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-map',
  templateUrl: 'map.html',
})
export class MapPage {

  location : {lat: number, lng: number} = {lat: 0, lng: 0};
  lat: number;
  lng: number;

  constructor(public navCtrl: NavController, public navParams: NavParams, private geolocation: Geolocation) {
  }

  locateUser(){
    this.geolocation.getCurrentPosition()
      .then(
        (location) => {
          console.log("Lokalisierung erfolgreich");
          this.lat = location.coords.latitude;
          this.lng = location.coords.longitude;
        }
      )
      .catch(
        (error) => console.log("Fehler")
      );
  }
}
