import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { OtpInputPanelPage } from './otp-input-panel';

@NgModule({
  declarations: [
    OtpInputPanelPage,
  ],
  imports: [
    IonicPageModule.forChild(OtpInputPanelPage),
  ],
})
export class OtpInputPanelPageModule {}
