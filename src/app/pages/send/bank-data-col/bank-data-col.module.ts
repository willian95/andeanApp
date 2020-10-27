import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BankDataColPageRoutingModule } from './bank-data-col-routing.module';

import { BankDataColPage } from './bank-data-col.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BankDataColPageRoutingModule
  ],
  declarations: [BankDataColPage]
})
export class BankDataColPageModule {}
