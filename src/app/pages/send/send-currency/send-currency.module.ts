import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SendCurrencyPageRoutingModule } from './send-currency-routing.module';

import { SendCurrencyPage } from './send-currency.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SendCurrencyPageRoutingModule
  ],
  declarations: [SendCurrencyPage]
})
export class SendCurrencyPageModule {}
