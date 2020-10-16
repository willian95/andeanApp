import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { IdentificationDocumentPage } from './identification-document.page';

const routes: Routes = [
  {
    path: '',
    component: IdentificationDocumentPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class IdentificationDocumentPageRoutingModule {}
