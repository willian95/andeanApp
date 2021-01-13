import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TwoStepVerificationPage } from './two-step-verification.page';

const routes: Routes = [
  {
    path: '',
    component: TwoStepVerificationPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TwoStepVerificationPageRoutingModule {}
