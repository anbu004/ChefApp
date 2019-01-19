import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SelectChefPage } from './select-chef';

@NgModule({
  declarations: [
    SelectChefPage,
  ],
  imports: [
    IonicPageModule.forChild(SelectChefPage),
  ],
})
export class SelectChefPageModule {}
