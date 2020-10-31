import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AddFundsBankTransferLoadingPage } from './add-funds-bank-transfer-loading.page';

const routes: Routes = [
  {
    path: '',
    component: AddFundsBankTransferLoadingPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AddFundsBankTransferLoadingPageRoutingModule {}
