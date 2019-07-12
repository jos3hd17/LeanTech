import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { HomeComponent } from './components/dashboard/home/home.component';
import { MessagesComponent } from './components/dashboard/messages/messages.component';
import { SettingsComponent } from './components/dashboard/settings/settings.component';
import { AccountComponent } from './components/dashboard/account/account.component';
import { SidebarHomeComponent } from './components/sidebar/sidebar-home/sidebar-home.component';
import { SidebarMessagesComponent } from './components/sidebar/sidebar-messages/sidebar-messages.component';
import { SidebarAccountComponent } from './components/sidebar/sidebar-account/sidebar-account.component';
import { SidebarSettingsComponent } from './components/sidebar/sidebar-settings/sidebar-settings.component';

const routes: Routes = [
  {
    path: 'dashboard',
    component: DashboardComponent,
    children: [
      {
        path: 'home',
        component: HomeComponent
      },
      {
        path: 'messages',
        component: MessagesComponent
      },
      {
        path: 'settings',
        component: SettingsComponent
      },
      {
        path: 'account',
        component: AccountComponent
      },
      {
        path: '',
        component: SidebarHomeComponent,
        outlet: 'sidebar'
      },
      {
        path: 'sidebar-messages',
        component: SidebarMessagesComponent,
        outlet: 'sidebar'
      },
      {
        path: 'sidebar-account',
        component: SidebarAccountComponent,
        outlet: 'sidebar'
      },
      {
        path: 'sidebar-settings',
        component: SidebarSettingsComponent,
        outlet: 'sidebar'
      }
    ]
  },
  {
    path: '',
    redirectTo: 'dashboard/home',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
