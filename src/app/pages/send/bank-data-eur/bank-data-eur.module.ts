import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BankDataEurPageRoutingModule } from './bank-data-eur-routing.module';

import { BankDataEurPage } from './bank-data-eur.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BankDataEurPageRoutingModule
  ],
  declarations: [BankDataEurPage]
})
export class BankDataEurPageModule {}
