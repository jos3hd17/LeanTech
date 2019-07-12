import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { HomeComponent } from './components/dashboard/home/home.component';
import { MessagesComponent } from './components/dashboard/messages/messages.component';
import { AccountComponent } from './components/dashboard/account/account.component';
import { WishComponent } from './components/dashboard/wish/wish.component';
import { SettingsComponent } from './components/dashboard/settings/settings.component';
import { SidebarHomeComponent } from './components/sidebar/sidebar-home/sidebar-home.component';
import { SidebarMessagesComponent } from './components/sidebar/sidebar-messages/sidebar-messages.component';
import { SidebarAccountComponent } from './components/sidebar/sidebar-account/sidebar-account.component';
import { SidebarSettingsComponent } from './components/sidebar/sidebar-settings/sidebar-settings.component';
import { StructureModule } from '../structure/structure.module';

@NgModule({
  declarations: [DashboardComponent,
     HomeComponent,
     MessagesComponent,
     AccountComponent,
     WishComponent,
     SettingsComponent,
     SidebarHomeComponent,
     SidebarMessagesComponent,
     SidebarAccountComponent,
     SidebarSettingsComponent
    ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    StructureModule
  ]
})
export class DashboardModule { }
