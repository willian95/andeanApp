import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TaxDocumentPage } from './tax-document.page';

const routes: Routes = [
  {
    path: '',
    component: TaxDocumentPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TaxDocumentPageRoutingModule {}
