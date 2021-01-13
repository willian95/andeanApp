import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AccountServicesPage } from './account-services.page';

const routes: Routes = [
  {
    path: '',
    component: AccountServicesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AccountServicesPageRoutingModule {}
