import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AddFundsBankTransferPage } from './add-funds-bank-transfer.page';

const routes: Routes = [
  {
    path: '',
    component: AddFundsBankTransferPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AddFundsBankTransferPageRoutingModule {}
