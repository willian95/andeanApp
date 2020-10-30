import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SendBankTransferPageRoutingModule } from './send-bank-transfer-routing.module';

import { SendBankTransferPage } from './send-bank-transfer.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SendBankTransferPageRoutingModule
  ],
  declarations: [SendBankTransferPage]
})
export class SendBankTransferPageModule {}
