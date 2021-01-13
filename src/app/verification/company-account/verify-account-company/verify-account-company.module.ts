import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { VerifyAccountCompanyPageRoutingModule } from './verify-account-company-routing.module';

import { VerifyAccountCompanyPage } from './verify-account-company.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    VerifyAccountCompanyPageRoutingModule
  ],
  declarations: [VerifyAccountCompanyPage]
})
export class VerifyAccountCompanyPageModule {}
