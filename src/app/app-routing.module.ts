import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
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
    loadChildren: () => import('./verification/company-account/verify-account/verify-account.module').then( m => m.VerifyAccountPageModule)
  },
  {
    path: 'verify-company',
    loadChildren: () => import('./verification/company-account/verify-company/verify-company.module').then( m => m.VerifyCompanyPageModule)
  }
  
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
