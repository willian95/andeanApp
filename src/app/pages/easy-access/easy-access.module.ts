import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EasyAccessPageRoutingModule } from './easy-access-routing.module';

import { EasyAccessPage } from './easy-access.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EasyAccessPageRoutingModule
  ],
  declarations: [EasyAccessPage]
})
export class EasyAccessPageModule {}
