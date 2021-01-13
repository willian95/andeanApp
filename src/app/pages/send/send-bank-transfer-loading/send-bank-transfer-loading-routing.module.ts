import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SendBankTransferLoadingPage } from './send-bank-transfer-loading.page';

const routes: Routes = [
  {
    path: '',
    component: SendBankTransferLoadingPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SendBankTransferLoadingPageRoutingModule {}
