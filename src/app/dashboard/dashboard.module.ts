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
import { StoreModule } from '@ngrx/store';
import * as fromState from './state/reducers';
import { EffectsModule } from '@ngrx/effects';
import { HomeEffects } from './state/effects/home.effects';
import { HttpClientModule } from '@angular/common/http';

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
    StructureModule,
    StoreModule.forFeature('services', fromState.reducers),
    EffectsModule.forFeature( [HomeEffects] )
  ]
})
export class DashboardModule { }
