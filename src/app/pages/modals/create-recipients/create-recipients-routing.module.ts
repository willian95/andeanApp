import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CreateRecipientsPage } from './create-recipients.page';

const routes: Routes = [
  {
    path: '',
    component: CreateRecipientsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CreateRecipientsPageRoutingModule {}
