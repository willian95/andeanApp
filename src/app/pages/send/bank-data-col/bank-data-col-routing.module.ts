import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BankDataColPage } from './bank-data-col.page';

const routes: Routes = [
  {
    path: '',
    component: BankDataColPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BankDataColPageRoutingModule {}
