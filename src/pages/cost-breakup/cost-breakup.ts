import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ConfirmationPage } from '../confirmation/confirmation';

/**
 * Generated class for the CostBreakupPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-cost-breakup',
  templateUrl: 'cost-breakup.html',
})
export class CostBreakupPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CostBreakupPage');
  }

  navigateToConfirmation(){
    this.navCtrl.push(ConfirmationPage);
  }

}
