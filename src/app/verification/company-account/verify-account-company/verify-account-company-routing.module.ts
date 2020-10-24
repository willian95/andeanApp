import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { VerifyAccountCompanyPage } from './verify-account-company.page';

const routes: Routes = [
  {
    path: '',
    component: VerifyAccountCompanyPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class VerifyAccountCompanyPageRoutingModule {}
