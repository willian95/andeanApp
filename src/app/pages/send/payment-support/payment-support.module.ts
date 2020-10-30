import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PaymentSupportPageRoutingModule } from './payment-support-routing.module';

import { PaymentSupportPage } from './payment-support.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PaymentSupportPageRoutingModule
  ],
  declarations: [PaymentSupportPage]
})
export class PaymentSupportPageModule {}
