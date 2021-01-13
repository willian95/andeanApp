import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AnotherPersonPageRoutingModule } from './another-person-routing.module';

import { AnotherPersonPage } from './another-person.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AnotherPersonPageRoutingModule
  ],
  declarations: [AnotherPersonPage]
})
export class AnotherPersonPageModule {}
