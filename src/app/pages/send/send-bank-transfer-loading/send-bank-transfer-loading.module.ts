import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SendBankTransferLoadingPageRoutingModule } from './send-bank-transfer-loading-routing.module';

import { SendBankTransferLoadingPage } from './send-bank-transfer-loading.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SendBankTransferLoadingPageRoutingModule
  ],
  declarations: [SendBankTransferLoadingPage]
})
export class SendBankTransferLoadingPageModule {}
