import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { VerifyCompanyPage } from './verify-company.page';

const routes: Routes = [
  {
    path: '',
    component: VerifyCompanyPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class VerifyCompanyPageRoutingModule {}
