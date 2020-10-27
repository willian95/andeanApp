import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BankDataEurPage } from './bank-data-eur.page';

const routes: Routes = [
  {
    path: '',
    component: BankDataEurPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BankDataEurPageRoutingModule {}
