import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CreatePaymentsPageRoutingModule } from './create-payments-routing.module';

import { CreatePaymentsPage } from './create-payments.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CreatePaymentsPageRoutingModule
  ],
  declarations: [CreatePaymentsPage]
})
export class CreatePaymentsPageModule {}
