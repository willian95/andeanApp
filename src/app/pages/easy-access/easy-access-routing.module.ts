import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EasyAccessPage } from './easy-access.page';

const routes: Routes = [
  {
    path: '',
    component: EasyAccessPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EasyAccessPageRoutingModule {}
