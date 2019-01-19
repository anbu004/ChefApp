import { Component, OnInit } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController, PopoverController } from 'ionic-angular';
import { HttpClient } from '@angular/common/http';
import {Observable } from 'rxjs/Observable';
import { ChefProfilePage } from '../chef-profile/chef-profile';


/**
 * Generated class for the SelectChefPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-select-chef',
  templateUrl: 'select-chef.html',
})
export class SelectChefPage implements OnInit{

  public items:any;
  rating : any;
  priceRange : any;
  availableChefs: string = "Price";

  constructor(public navCtrl: NavController, public navParams: NavParams, 
    public http: HttpClient,  private modal:ModalController, public popoverCtrl:PopoverController ){
    this.getData();
    this.rating = this.navParams.get('rating');
    this.priceRange = this.navParams.get('priceRange');
    console.log(this.rating);
    console.log(this.priceRange);
  }


  sortByPriceIncreasing(){
    console.log('in Increasing Price sort');
    // this.descending = !this.descending;
    // this.order = this.descending ? 1 : -1;
    console.log("items array-----"+this.items);
    this.items.sort(
      function(a,b) {
        return (a.bookingCost < b.bookingCost) ? -1 : (a.bookingCost > b.bookingCost) ? 1 : 0 ;});
  }

  sortByPriceDecreasing(){
    console.log('in Decreasing Price sort');
    this.getData();
    // this.descending = !this.descending;
    // this.order = this.descending ? 1 : -1;
    this.items.sort(
      function(a,b) {
        return (a.bookingCost > b.bookingCost) ? -1 : (a.bookingCost < b.bookingCost) ? 1 : 0 ;});
  }

  sortByAverageRating(){
    console.log('in Average Rating sort')
    this.items.sort(
      function(a,b) {
        return (a.AverageRating > b.AverageRating) ? -1 : (a.AverageRating < b.AverageRating) ? 1 : 0 ;});
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SelectChefPage');
  }

  ngOnInit(){
  }

  ionViewWillEnter(){
    if(this.rating === "highToLow"){
      this.sortByPriceDecreasing();
    }
    if(this.rating === "lowToHigh"){
      this.sortByPriceIncreasing();
    }
  }

  getData(){
    console.log("In get Data");
    //let url='https://jsonplaceholder.typicode.com/photos';
    let url='./assets/tempData.json';    
    let data: Observable<any> = this.http.get(url);
    data.subscribe(result => {
      this.items=result;
    }); 
    console.log(this.items);
  }

  openFilterPage(){
    console.log('here');
    const myfilterPage=this.modal.create('FilterPage');
    console.log('here 2');
    myfilterPage.present();

  }

  // openPopover(){
  //   let popover = this.popoverCtrl.create('FilterPage');
  //          popover.onDidDismiss(data => {
  //              this.filteredItems = data
  //          });
  //          popover.present();
  // }

  navigateToChefProfile(id:string){
    this.navCtrl.push(ChefProfilePage,{
      chefId: id
    })
  }

  navigateToRoot(){
    console.log('Navigating to Inputs Page')
    this.navCtrl.popToRoot();
  }

}
