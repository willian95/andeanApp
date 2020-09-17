import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CreatePaymentsPage } from './create-payments.page';

const routes: Routes = [
  {
    path: '',
    component: CreatePaymentsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CreatePaymentsPageRoutingModule {}
