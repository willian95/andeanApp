import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RecipientsPageRoutingModule } from './recipients-routing.module';

import { RecipientsPage } from './recipients.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RecipientsPageRoutingModule
  ],
  declarations: [RecipientsPage]
})
export class RecipientsPageModule {}
