import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CheckPhonePersonPageRoutingModule } from './check-phone-person-routing.module';

import { CheckPhonePersonPage } from './check-phone-person.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CheckPhonePersonPageRoutingModule
  ],
  declarations: [CheckPhonePersonPage]
})
export class CheckPhonePersonPageModule {}
