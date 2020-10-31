import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AddFundsDetailPage } from './add-funds-detail.page';

const routes: Routes = [
  {
    path: '',
    component: AddFundsDetailPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AddFundsDetailPageRoutingModule {}
