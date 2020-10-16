import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BankStatementPage } from './bank-statement.page';

const routes: Routes = [
  {
    path: '',
    component: BankStatementPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BankStatementPageRoutingModule {}
