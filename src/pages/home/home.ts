import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { EstimoteBeacons } from '@ionic-native/estimote-beacons';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController, public beacon: EstimoteBeacons ) {
    
    this.beacon.startRangingBeaconsInRegion()
    .subscribe(
      val => { alert(JSON.stringify(val)) },
      err => { alert(err) }
    )  
  }

}




