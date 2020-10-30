import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SendBankTransferPage } from './send-bank-transfer.page';

const routes: Routes = [
  {
    path: '',
    component: SendBankTransferPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SendBankTransferPageRoutingModule {}
