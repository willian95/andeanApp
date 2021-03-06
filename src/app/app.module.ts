import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';
import { CommonModule } from '@angular/common';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { FilePath } from '@ionic-native/file-path/ngx';
import { FileTransfer } from '@ionic-native/file-transfer/ngx';
import { File } from '@ionic-native/file/ngx';
import { Camera } from '@ionic-native/camera/ngx';

import { HelpPageModule } from './pages/modals/help/help.module';
import { RecipientsPageModule } from './pages/modals/recipients/recipients.module';
import { CreateRecipientsPageModule } from './pages/modals/create-recipients/create-recipients.module';
import { UpdateRecipientsPageModule } from './pages/modals/update-recipients/update-recipients.module';
import { AccountsPageModule } from './pages/modals/accounts/accounts.module';
import { CreatePaymentsPageModule } from './pages/modals/create-payments/create-payments.module';
import { CheckoutPageModule } from './pages/modals/checkout/checkout.module';
import { Base64 } from '@ionic-native/base64/ngx';
import { Clipboard } from '@ionic-native/clipboard/ngx';

@NgModule({
  declarations: [AppComponent],
  entryComponents: [
    
  ],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule, HttpClientModule, CommonModule, HelpPageModule, RecipientsPageModule, CreateRecipientsPageModule, UpdateRecipientsPageModule, AccountsPageModule, CreatePaymentsPageModule, CheckoutPageModule],
  providers: [
    StatusBar,
    File,
    FilePath,
    FileTransfer,
    Base64,
    Clipboard,
    Camera,
    SplashScreen,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
