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
  }
  
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
