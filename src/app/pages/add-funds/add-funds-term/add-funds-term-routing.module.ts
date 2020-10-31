import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AddFundsTermPage } from './add-funds-term.page';

const routes: Routes = [
  {
    path: '',
    component: AddFundsTermPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AddFundsTermPageRoutingModule {}
