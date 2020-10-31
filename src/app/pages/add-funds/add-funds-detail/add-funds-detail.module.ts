import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AddFundsDetailPageRoutingModule } from './add-funds-detail-routing.module';

import { AddFundsDetailPage } from './add-funds-detail.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AddFundsDetailPageRoutingModule
  ],
  declarations: [AddFundsDetailPage]
})
export class AddFundsDetailPageModule {}
