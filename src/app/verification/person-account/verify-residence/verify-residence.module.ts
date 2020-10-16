import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { VerifyResidencePageRoutingModule } from './verify-residence-routing.module';

import { VerifyResidencePage } from './verify-residence.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    VerifyResidencePageRoutingModule
  ],
  declarations: [VerifyResidencePage]
})
export class VerifyResidencePageModule {}
