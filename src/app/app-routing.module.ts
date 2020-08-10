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
  /*{
    path: 'dashboard',
    loadChildren: () => import('./pages/landing/dashboard/dashboard.module').then( m => m.DashboardPageModule)
  },*/
  {
    path: 'tabs',
    loadChildren: () => import('./pages/landing/tabs/tabs.module').then( m => m.TabsPageModule)
  },
  {
    path: 'activity',
    loadChildren: () => import('./pages/landing/activity/activity.module').then( m => m.ActivityPageModule)
  },
  /*{
    path: 'account',
    loadChildren: () => import('./pages/landing/account/account.module').then( m => m.AccountPageModule)
  },
  {
    path: 'send',
    loadChildren: () => import('./pages/landing/send/send.module').then( m => m.SendPageModule)
  },
  {
    path: 'recipients',
    loadChildren: () => import('./pages/landing/recipients/recipients.module').then( m => m.RecipientsPageModule)
  },
  {
    path: 'invite',
    loadChildren: () => import('./pages/landing/invite/invite.module').then( m => m.InvitePageModule)
  },*/
  /*{
    path: 'activity',
    loadChildren: () => import('./pages/landing/activity/activity.module').then( m => m.ActivityPageModule)
  },*/
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
