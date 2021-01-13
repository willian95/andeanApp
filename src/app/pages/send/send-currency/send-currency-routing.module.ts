import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SendCurrencyPage } from './send-currency.page';

const routes: Routes = [
  {
    path: '',
    component: SendCurrencyPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SendCurrencyPageRoutingModule {}
