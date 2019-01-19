import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { SelectChefPage } from '../pages/select-chef/select-chef';
import { HttpClientModule } from '@angular/common/http';
import { ChefProfilePage } from '../pages/chef-profile/chef-profile';
import { BookingDetailsPage } from '../pages/booking-details/booking-details';
import { CostBreakupPage } from '../pages/cost-breakup/cost-breakup';
import { ConfirmationPage } from '../pages/confirmation/confirmation';
import { SortPipe } from '../pipes/sort/sort';

import { SignupPage } from '../pages/signup/signup';

import { GooglePlus } from '@ionic-native/google-plus';
import { AboutPage } from '../pages/about/about';
import { UserProfilePage } from '../pages/user-profile/user-profile';
import { BookingsPage } from '../pages/bookings/bookings';
import { UserInputsPage } from '../pages/user-inputs/user-inputs';
import { GooglePlacesAutocompleteComponentModule } from 'ionic2-google-places-autocomplete';
import { OtpInputPanelPage } from '../pages/otp-input-panel/otp-input-panel';

import { Connectivity } from '../providers/connectivity-service/connectivity-service';
import { GoogleMaps } from '../providers/google-maps/google-maps';
import { Network } from '@ionic-native/network';
import { Geolocation } from '@ionic-native/geolocation';



@NgModule({
  declarations: [
    MyApp,
    HomePage,
    SelectChefPage,
    ChefProfilePage,
    BookingDetailsPage,
    CostBreakupPage,
    ConfirmationPage,
    SortPipe,
    SignupPage,
    AboutPage,
    UserProfilePage,
    BookingsPage,
    UserInputsPage,
    OtpInputPanelPage
    
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    IonicModule.forRoot(MyApp),
    GooglePlacesAutocompleteComponentModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    SelectChefPage,
    ChefProfilePage,
    BookingDetailsPage,
    CostBreakupPage,
    ConfirmationPage,
    SignupPage,
    AboutPage,
    UserProfilePage,
    BookingsPage,
    UserInputsPage,
    OtpInputPanelPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    GooglePlus,
    Connectivity,
    GoogleMaps,
    Network,
    Geolocation,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
