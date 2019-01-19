import { Component } from '@angular/core';
import { IonicPage, ViewController, NavController, NavParams } from 'ionic-angular';
import { SelectChefPage } from '../select-chef/select-chef';

/**
 * Generated class for the FilterPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-filter',
  templateUrl: 'filter.html',
})
export class FilterPage {

  rating : any;
  priceRange : any;


  constructor(private view: ViewController, public navCtrl: NavController, 
                public params: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad FilterPage');
  }

  closeFilters(){
    console.log('here 3')
    this.view.dismiss();

  }
  onApplyFilters(){
    let inputData= {
      rating : this.rating,
      priceRange : this.priceRange
    }
    this.navCtrl.push(SelectChefPage,inputData);
  }

}
