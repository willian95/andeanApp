import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { VerifyCompanyPageRoutingModule } from './verify-company-routing.module';

import { VerifyCompanyPage } from './verify-company.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    VerifyCompanyPageRoutingModule
  ],
  declarations: [VerifyCompanyPage]
})
export class VerifyCompanyPageModule {}
