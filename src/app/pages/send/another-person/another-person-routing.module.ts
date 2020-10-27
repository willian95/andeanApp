import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AnotherPersonPage } from './another-person.page';

const routes: Routes = [
  {
    path: '',
    component: AnotherPersonPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AnotherPersonPageRoutingModule {}
