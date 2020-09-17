import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { UpdateRecipientsPageRoutingModule } from './update-recipients-routing.module';

import { UpdateRecipientsPage } from './update-recipients.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    UpdateRecipientsPageRoutingModule
  ],
  declarations: [UpdateRecipientsPage]
})
export class UpdateRecipientsPageModule {}
