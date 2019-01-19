import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';
import { SignupPage } from '../signup/signup';

/**
 * Generated class for the OtpInputPanelPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-otp-input-panel',
  templateUrl: 'otp-input-panel.html',
})
export class OtpInputPanelPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, private view:ViewController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad OtpInputPanelPage');
  }

  closeFilters(){
    this.view.dismiss();
  }
  verifyOTP(){
    console.log('OTP verified');
    this.navCtrl.popToRoot();
    this.navCtrl.push(SignupPage);
    
  }


}
