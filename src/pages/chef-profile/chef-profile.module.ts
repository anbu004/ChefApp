import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ChefProfilePage } from './chef-profile';

@NgModule({
  declarations: [
    ChefProfilePage,
  ],
  imports: [
    IonicPageModule.forChild(ChefProfilePage),
  ],
})
export class ChefProfilePageModule {}
