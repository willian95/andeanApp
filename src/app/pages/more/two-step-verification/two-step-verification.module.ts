import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TwoStepVerificationPageRoutingModule } from './two-step-verification-routing.module';

import { TwoStepVerificationPage } from './two-step-verification.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TwoStepVerificationPageRoutingModule
  ],
  declarations: [TwoStepVerificationPage]
})
export class TwoStepVerificationPageModule {}
