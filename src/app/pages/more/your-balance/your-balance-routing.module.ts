import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { YourBalancePage } from './your-balance.page';

const routes: Routes = [
  {
    path: '',
    component: YourBalancePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class YourBalancePageRoutingModule {}
