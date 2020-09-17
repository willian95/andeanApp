import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RecipientsPage } from './recipients.page';

const routes: Routes = [
  {
    path: '',
    component: RecipientsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RecipientsPageRoutingModule {}
