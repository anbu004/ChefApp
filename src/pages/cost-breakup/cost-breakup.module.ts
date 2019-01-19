import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CostBreakupPage } from './cost-breakup';

@NgModule({
  declarations: [
    CostBreakupPage,
  ],
  imports: [
    IonicPageModule.forChild(CostBreakupPage),
  ],
})
export class CostBreakupPageModule {}
