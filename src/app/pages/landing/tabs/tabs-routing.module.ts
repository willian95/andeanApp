import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: '',
    component: TabsPage,
    children:
      [
        {
          path: 'activity',
          children:[
            {
              path:'',
              loadChildren: () => import('../activity/activity.module').then(m => m.ActivityPageModule)
            }
          ]
        },
        {
          path: 'account',
          children:[
            {
              path:'',
              loadChildren: () => import('../account/account.module').then(m => m.AccountPageModule)
            }
          ]
        },
        {
          path: 'address',
          children:[
            {
              path:'',
              loadChildren: () => import('../address/address.module').then(m => m.AddressPageModule)
            }
          ]
        },
        {
          path: 'menu',
          children:[
            {
              path:'',
              loadChildren: () => import('../menu/menu.module').then(m => m.MenuPageModule)
            }
          ]
        },
        {
          path: 'send',
          children:[
            {
              path:'',
              loadChildren: () => import('../send/send.module').then(m => m.SendPageModule)
            }
          ]
        },
        {
          path: '',
          redirectTo: '/tabs/activity',
          pathMatch: 'full'
        }
      ]
  },
  {
    path: '',
    redirectTo: '/tabs/activity',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TabsPageRoutingModule {}
