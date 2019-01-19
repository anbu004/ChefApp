import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { UserInputsPage } from './user-inputs';

@NgModule({
  declarations: [
    UserInputsPage,
  ],
  imports: [
    IonicPageModule.forChild(UserInputsPage),
  ],
})
export class UserInputsPageModule {}
