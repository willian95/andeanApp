import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TaxDocumentPageRoutingModule } from './tax-document-routing.module';

import { TaxDocumentPage } from './tax-document.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TaxDocumentPageRoutingModule
  ],
  declarations: [TaxDocumentPage]
})
export class TaxDocumentPageModule {}
