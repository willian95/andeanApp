import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PaymentSupportPage } from './payment-support.page';

const routes: Routes = [
  {
    path: '',
    component: PaymentSupportPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PaymentSupportPageRoutingModule {}
