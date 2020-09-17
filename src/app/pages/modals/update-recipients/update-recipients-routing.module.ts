import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UpdateRecipientsPage } from './update-recipients.page';

const routes: Routes = [
  {
    path: '',
    component: UpdateRecipientsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UpdateRecipientsPageRoutingModule {}
