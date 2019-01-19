import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { CostBreakupPage } from '../cost-breakup/cost-breakup';

/**
 * Generated class for the BookingDetailsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-booking-details',
  templateUrl: 'booking-details.html',
})
export class BookingDetailsPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad BookingDetailsPage');
  }
  navigateToCostBreakup()
  {
    this.navCtrl.push(CostBreakupPage);
  }
  navigateToRoot(){
    console.log('Navigating to Inputs Page')
    this.navCtrl.popToRoot();
  }

}
