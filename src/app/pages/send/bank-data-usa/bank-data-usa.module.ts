import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BankDataUsaPageRoutingModule } from './bank-data-usa-routing.module';

import { BankDataUsaPage } from './bank-data-usa.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BankDataUsaPageRoutingModule
  ],
  declarations: [BankDataUsaPage]
})
export class BankDataUsaPageModule {}
