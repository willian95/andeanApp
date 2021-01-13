import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PayYourTransferPage } from './pay-your-transfer.page';

const routes: Routes = [
  {
    path: '',
    component: PayYourTransferPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PayYourTransferPageRoutingModule {}
