import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AddFundsBankTransferPageRoutingModule } from './add-funds-bank-transfer-routing.module';

import { AddFundsBankTransferPage } from './add-funds-bank-transfer.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AddFundsBankTransferPageRoutingModule
  ],
  declarations: [AddFundsBankTransferPage]
})
export class AddFundsBankTransferPageModule {}
