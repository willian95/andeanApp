import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AddFundsTermPageRoutingModule } from './add-funds-term-routing.module';

import { AddFundsTermPage } from './add-funds-term.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AddFundsTermPageRoutingModule
  ],
  declarations: [AddFundsTermPage]
})
export class AddFundsTermPageModule {}
