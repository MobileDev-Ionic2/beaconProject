import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { EstimoteBeacons } from '@ionic-native/estimote-beacons';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController, public beacon: EstimoteBeacons ) {
    var region = {};
    this.beacon.startSecureMonitoringForRegion(region, notifyEntryStateOnDisplay)
    
   
  }

  }



  function onRangingSuccess(beaconInfo) {
    alert('Number of beacons ranged ' + beaconInfo.beacons.length)
}
