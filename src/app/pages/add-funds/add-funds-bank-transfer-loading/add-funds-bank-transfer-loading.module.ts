import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AddFundsBankTransferLoadingPageRoutingModule } from './add-funds-bank-transfer-loading-routing.module';

import { AddFundsBankTransferLoadingPage } from './add-funds-bank-transfer-loading.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AddFundsBankTransferLoadingPageRoutingModule
  ],
  declarations: [AddFundsBankTransferLoadingPage]
})
export class AddFundsBankTransferLoadingPageModule {}
