import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BankDataUsaPage } from './bank-data-usa.page';

const routes: Routes = [
  {
    path: '',
    component: BankDataUsaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BankDataUsaPageRoutingModule {}
