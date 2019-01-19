import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HttpClient } from '@angular/common/http';
import {Observable } from 'rxjs/Observable';
import { BookingDetailsPage } from '../booking-details/booking-details';

/**
 * Generated class for the ChefProfilePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-chef-profile',
  templateUrl: 'chef-profile.html',
})
export class ChefProfilePage {


  items: any;
  chefId : any;
  Specialities : string = "Veg";
  sliderNonVeg = [
    {
      title: 'Butter Chicken',
      image: "assets/imgs/Butter_chicken_recipe.jpg"
    },
    {
      title: 'Chicken Tikka masala',
      image: "assets/imgs/Chicken_tikka_masala.jpg"
    },
    {
      title: 'Chicken Shahi',
      image: "assets/imgs/butter_chicken_1.jpg"
    }
  ];

  sliderVeg = [
    {
      title: 'Paneer Handi',
      image: "assets/imgs/paneer handi.jpg"
    },
    {
      title: 'Navratan Korma',
      image: "assets/imgs/navratan_korma.jpg"
    },
    {
      title: 'Butter Paneer',
      image: "assets/imgs/paneer butter masala.jpg"
    }
  ];

  sliderDessert = [
    {
      title: 'Badam Kheer',
      image: "assets/imgs/Badam_Kheer_Recipe_Indian_Spiced_Almond_Milk-1.jpg"
    },
    {
      title: 'Rasgulla',
      image: "assets/imgs/rasgulla.jpg"
    },
    {
      title: 'Gulab Jamun',
      image: "assets/imgs/Gulab Jamun.jpg"
    }
  ];


  constructor(public navCtrl: NavController, public navParams: NavParams, public http: HttpClient) {
      this.getChefProfile(navParams.get('chefId'));
      this.chefId = this.navParams.get('chefId');
    console.log(navParams.get('chefId'));
    console.log(this.items);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ChefProfilePage');
  }

  getChefProfile(id: string){
    console.log('inside getChefProfile');
    //let url='https://jsonplaceholder.typicode.com/photos';
    let url='./assets/chefProfiles.json';    
    let data: Observable<any> = this.http.get(url);
    data.subscribe(result => {
      this.items=result;
      //console.log(result);
    }); 
  }
  showProfile(chefId, elementId){
    console.log(chefId, elementId);
    if(chefId == elementId)
    return true;
  }
  navigateToBookingPage(){
    console.log('hi 3');
    this.navCtrl.push(BookingDetailsPage);
  }

  navigateToRoot(){
    console.log('Navigating to Inputs Page')
    this.navCtrl.popToRoot();
  }

}
