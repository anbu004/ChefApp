import { Component } from '@angular/core';
import { NavController, ModalController } from 'ionic-angular';
import { SelectChefPage } from '../select-chef/select-chef';
import { ChefProfilePage } from '../chef-profile/chef-profile';
import { GooglePlus } from '@ionic-native/google-plus';
import { HttpClient } from '@angular/common/http';
import { SignupPage } from '../signup/signup';
import { OtpInputPanelPage } from '../otp-input-panel/otp-input-panel';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController, private googlePlus: GooglePlus, private http: HttpClient, private modal:ModalController) {

  }

  user:any = {};
  ontoggleclick(){

    this.navCtrl.push(SelectChefPage);

  }

  navigateToChefProfile(){
    this.navCtrl.push(ChefProfilePage,{
      val: 'shekhar'
    })
  }

  loginGoogle(){

  this.googlePlus.login({})
  .then(res => {
    this.user = res;
    this.getGoogleData();
    console.log(res);
  })
  .catch(err => console.error(err));
  console.log(
    'skr3'
  );
  this.navCtrl.push(SignupPage);
  }

  getGoogleData(){
    console.log('inside getgoogledata skr');
    let token = this.user.accessToken;
    console.log('skr 2 '+this.user.id);
    let URL='https://www.googleapis.com/plus/v1/people/me?access_token='+token;
    this.http
    .get(URL)
    .subscribe((data:any) => {
      this.user.name = data.displayName;
      this.user.image = data.image.url;
      this.user.userId = data.id;


    })
  }

  openOTPinputPanel(){
    console.log('inside openOTPinputPanel');
    this.navCtrl.push(OtpInputPanelPage);
    //const myfilterPage=this.modal.create('OtpInputPanelPage');
    //myfilterPage.present();
    
  }

  
}
