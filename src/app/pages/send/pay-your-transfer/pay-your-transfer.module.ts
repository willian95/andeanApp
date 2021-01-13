import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PayYourTransferPageRoutingModule } from './pay-your-transfer-routing.module';

import { PayYourTransferPage } from './pay-your-transfer.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PayYourTransferPageRoutingModule
  ],
  declarations: [PayYourTransferPage]
})
export class PayYourTransferPageModule {}
