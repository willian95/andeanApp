import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { YourBalancePageRoutingModule } from './your-balance-routing.module';

import { YourBalancePage } from './your-balance.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    YourBalancePageRoutingModule
  ],
  declarations: [YourBalancePage]
})
export class YourBalancePageModule {}
