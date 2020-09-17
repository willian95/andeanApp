import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CreateRecipientsPageRoutingModule } from './create-recipients-routing.module';

import { CreateRecipientsPage } from './create-recipients.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CreateRecipientsPageRoutingModule
  ],
  declarations: [CreateRecipientsPage]
})
export class CreateRecipientsPageModule {}
