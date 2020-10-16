import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { IdentificationDocumentPageRoutingModule } from './identification-document-routing.module';

import { IdentificationDocumentPage } from './identification-document.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    IdentificationDocumentPageRoutingModule
  ],
  declarations: [IdentificationDocumentPage]
})
export class IdentificationDocumentPageModule {}
