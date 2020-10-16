import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DrivingPermitPage } from './driving-permit.page';

const routes: Routes = [
  {
    path: '',
    component: DrivingPermitPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DrivingPermitPageRoutingModule {}
