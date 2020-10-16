import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DrivingPermitPageRoutingModule } from './driving-permit-routing.module';

import { DrivingPermitPage } from './driving-permit.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DrivingPermitPageRoutingModule
  ],
  declarations: [DrivingPermitPage]
})
export class DrivingPermitPageModule {}
