import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { FundraiserService } from 'app/service/fundraiser.service';
import { WithdrawComponent } from 'app/component/withdraw/withdraw.component';
import { ContributeComponent } from 'app/component/contribute/contribute.component';
import { DashboardComponent } from 'app/component/dashboard/dashboard.component';
import { NewCampaignComponent } from 'app/component/new-campaign/new-campaign.component';
import { DisplayComponent } from 'app/component/display/display.component';
import { TeamComponent } from './component/team/team.component';
import { AppRouting } from 'app/app.routing';
import { UtilService } from 'app/service/util.service';

@NgModule({
  declarations: [
    AppComponent,
    ContributeComponent,
    DashboardComponent,
    DisplayComponent,
    NewCampaignComponent,
    WithdrawComponent,
    TeamComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRouting
  ],
  providers: [FundraiserService, FundraiserService, UtilService],
  bootstrap: [AppComponent]
})
export class AppModule { }
