import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'add-funds',
    pathMatch: 'full'
  },
  {
    path: 'login',
    loadChildren: () => import('./pages/login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'register',
    loadChildren: () => import('./pages/register/register.module').then( m => m.RegisterPageModule)
  },
  {
    path: 'tabs',
    loadChildren: () => import('./pages/landing/tabs/tabs.module').then( m => m.TabsPageModule)
  },
  {
    path: 'help',
    loadChildren: () => import('./pages/modals/help/help.module').then( m => m.HelpPageModule)
  },
  {
    path: 'forgot-password',
    loadChildren: () => import('./pages/forgot-password/forgot-password.module').then( m => m.ForgotPasswordPageModule)
  },
  {
    path: 'recipients',
    loadChildren: () => import('./pages/modals/recipients/recipients.module').then( m => m.RecipientsPageModule)
  },
  {
    path: 'create-recipients',
    loadChildren: () => import('./pages/modals/create-recipients/create-recipients.module').then( m => m.CreateRecipientsPageModule)
  },
  {
    path: 'update-recipients',
    loadChildren: () => import('./pages/modals/update-recipients/update-recipients.module').then( m => m.UpdateRecipientsPageModule)
  },
  {
    path: 'create-payments',
    loadChildren: () => import('./pages/modals/create-payments/create-payments.module').then( m => m.CreatePaymentsPageModule)
  },
  {
    path: 'accounts',
    loadChildren: () => import('./pages/modals/accounts/accounts.module').then( m => m.AccountsPageModule)
  },
  {
    path: 'checkout',
    loadChildren: () => import('./pages/modals/checkout/checkout.module').then( m => m.CheckoutPageModule)
  },
  {
    path: 'face-id',
    loadChildren: () => import('./verification/face-id/face-id.module').then( m => m.FaceIdPageModule)
  },
  {
    path: 'verify-account',
    loadChildren: () => import('./verification/person-account/verify-account/verify-account.module').then( m => m.VerifyAccountPageModule)
  },
  {
    path: 'verify-identity',
    loadChildren: () => import('./verification/person-account/verify-identity/verify-identity.module').then( m => m.VerifyIdentityPageModule)
  },
  {
    path: 'identification-document',
    loadChildren: () => import('./verification/person-account/identification-document/identification-document.module').then( m => m.IdentificationDocumentPageModule)
  },
  {
    path: 'passport',
    loadChildren: () => import('./verification/person-account/passport/passport.module').then( m => m.PassportPageModule)
  },
  {
    path: 'driving-permit',
    loadChildren: () => import('./verification/person-account/driving-permit/driving-permit.module').then( m => m.DrivingPermitPageModule)
  },
  {
    path: 'personal-information',
    loadChildren: () => import('./verification/person-account/personal-information/personal-information.module').then( m => m.PersonalInformationPageModule)
  },
  {
    path: 'verify-residence',
    loadChildren: () => import('./verification/person-account/verify-residence/verify-residence.module').then( m => m.VerifyResidencePageModule)
  },
  {
    path: 'bank-statement',
    loadChildren: () => import('./verification/person-account/bank-statement/bank-statement.module').then( m => m.BankStatementPageModule)
  },
  {
    path: 'invoice',
    loadChildren: () => import('./verification/person-account/invoice/invoice.module').then( m => m.InvoicePageModule)
  },
  {
    path: 'tax-document',
    loadChildren: () => import('./verification/person-account/tax-document/tax-document.module').then( m => m.TaxDocumentPageModule)
  },
  {
    path: 'verify-account-company',
    loadChildren: () => import('./verification/company-account/verify-account-company/verify-account-company.module').then(m => m.VerifyAccountCompanyPageModule)
  },
  {
    path: 'verify-company',
    loadChildren: () => import('./verification/company-account/verify-company/verify-company.module').then( m => m.VerifyCompanyPageModule)
  },
  {
    path: 'check-phone-person',
    loadChildren: () => import('./verification/person-account/check-phone-person/check-phone-person.module').then( m => m.CheckPhonePersonPageModule)
  },
  {
    path: 'wallet',
    loadChildren: () => import('./pages/wallet/wallet.module').then( m => m.WalletPageModule)
  },
  {
    path: 'account-services',
    loadChildren: () => import('./pages/account-services/account-services.module').then( m => m.AccountServicesPageModule)
  },
  {
    path: 'select-card',
    loadChildren: () => import('./pages/cards/select-card/select-card.module').then( m => m.SelectCardPageModule)
  },
  {
    path: 'card',
    loadChildren: () => import('./pages/cards/card/card.module').then( m => m.CardPageModule)
  },
    {
    path: 'send',
    loadChildren: () => import('./pages/landing/send/send.module').then( m => m.SendPageModule)
  },
  {
    path: 'send-currency',
    loadChildren: () => import('./pages/send/send-currency/send-currency.module').then( m => m.SendCurrencyPageModule)
  },
  {
    path: 'receiver',
    loadChildren: () => import('./pages/send/receiver/receiver.module').then( m => m.ReceiverPageModule)
  },
  {
    path: 'another-person',
    loadChildren: () => import('./pages/send/another-person/another-person.module').then( m => m.AnotherPersonPageModule)
  },
  {
    path: 'bank-data-usa',
    loadChildren: () => import('./pages/send/bank-data-usa/bank-data-usa.module').then( m => m.BankDataUsaPageModule)
  },
  {
    path: 'bank-data-eur',
    loadChildren: () => import('./pages/send/bank-data-eur/bank-data-eur.module').then( m => m.BankDataEurPageModule)
  },
  {
    path: 'bank-data-col',
    loadChildren: () => import('./pages/send/bank-data-col/bank-data-col.module').then( m => m.BankDataColPageModule)
  },
  {
    path: 'transaction-detail',
    loadChildren: () => import('./pages/send/transaction-detail/transaction-detail.module').then( m => m.TransactionDetailPageModule)
  },
  {
    path: 'pay-your-transfer',
    loadChildren: () => import('./pages/send/pay-your-transfer/pay-your-transfer.module').then( m => m.PayYourTransferPageModule)
  },
  {
    path: 'send-bank-transfer',
    loadChildren: () => import('./pages/send/send-bank-transfer/send-bank-transfer.module').then( m => m.SendBankTransferPageModule)
  },
  {
    path: 'send-bank-transfer-loading',
    loadChildren: () => import('./pages/send/send-bank-transfer-loading/send-bank-transfer-loading.module').then( m => m.SendBankTransferLoadingPageModule)
  },
  {
    path: 'payment-support',
    loadChildren: () => import('./pages/send/payment-support/payment-support.module').then( m => m.PaymentSupportPageModule)
  },
  {
    path: 'add-funds',
    loadChildren: () => import('./pages/add-funds/add-funds/add-funds.module').then( m => m.AddFundsPageModule)
  },
  {
    path: 'add-funds-detail',
    loadChildren: () => import('./pages/add-funds/add-funds-detail/add-funds-detail.module').then( m => m.AddFundsDetailPageModule)
  },
  {
    path: 'add-funds-bank-transfer',
    loadChildren: () => import('./pages/add-funds/add-funds-bank-transfer/add-funds-bank-transfer.module').then( m => m.AddFundsBankTransferPageModule)
  },
  {
    path: 'add-funds-bank-transfer-loading',
    loadChildren: () => import('./pages/add-funds/add-funds-bank-transfer-loading/add-funds-bank-transfer-loading.module').then( m => m.AddFundsBankTransferLoadingPageModule)
  },
  {
    path: 'add-funds-term',
    loadChildren: () => import('./pages/add-funds/add-funds-term/add-funds-term.module').then( m => m.AddFundsTermPageModule)
  },


];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
