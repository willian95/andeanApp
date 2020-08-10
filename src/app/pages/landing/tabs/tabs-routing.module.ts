import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TabsPage } from './tabs.page';
import { ActivityPage} from '../activity/activity.page';
import { AccountPage } from '../account/account.page';
import { SendPage } from '../send/send.page';
import { RecipientsPage } from '../recipients/recipients.page';
import { InvitePage } from '../invite/invite.page';

const routes: Routes = [
  {
    path: '',
    component: TabsPage,
    children:
      [
        {
          path: 'activity',
          //component: ActivityPage,
          loadChildren: '../activity/activity.module#ActivityPageModule'
        },
        {
          path: 'account',
          //component: AccountPage
          loadChildren: '../account/account.module#AccountPageModule'

        },
        /*{
          path: 'send',
          component: SendPage
          //loadChildren: '../send/send.module#SendPageModule'

        },
        {
          path: 'recipients',
          component: RecipientsPage
          //loadChildren: '../recipients/recipients.module#RecipientsPageModule'
        },
        {
          path: 'invite',
          component: InvitePage
          //loadChildren: '../invite/invite.module#InvitePageModule'
        }*/
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

/*

{
    path: 'dashboard',
    component: TabsPage,
    children:[
      {
        path: 'activity',
        children: [
          {
            path: '',
            loadChildren: './pages/landing/activity/activity.module'
          }
        ]
      }
    ],
    //loadChildren: () => import('./pages/landing/tabs/tabs.module').then( m => m.TabsPageModule)
  }

*/
