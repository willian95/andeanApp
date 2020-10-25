import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AccountServicesPageRoutingModule } from './account-services-routing.module';

import { AccountServicesPage } from './account-services.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AccountServicesPageRoutingModule
  ],
  declarations: [AccountServicesPage]
})
export class AccountServicesPageModule {}
