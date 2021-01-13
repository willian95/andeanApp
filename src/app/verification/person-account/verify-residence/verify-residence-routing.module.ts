import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { VerifyResidencePage } from './verify-residence.page';

const routes: Routes = [
  {
    path: '',
    component: VerifyResidencePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class VerifyResidencePageRoutingModule {}
