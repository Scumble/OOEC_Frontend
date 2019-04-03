import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule,ReactiveFormsModule}  from '@angular/forms';
import { SharedModule }   from '../../shared/modules/shared.module';
import { BrowserModule } from '@angular/platform-browser';
import { routing }  from './proteams.routing';
import { ProTeamComponent } from './proteams.component';
import { AuthGuard } from '../../auth.guard';
import { ProTeamService } from '../../services/proteams.services';
import {PagerService} from '../../shared/services/page.service'
import { ProTeamPlayersComponent } from './proTeamsPlayers/proteamplayers.component';
import { ProTeamMatchesComponent } from './proTeamsMatches/proteamMatches.component';
import { ProTeamStatisticsComponent } from './proTeamsStatistics/proteamstatistics.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    routing,
    SharedModule,
    CommonModule,
    ReactiveFormsModule,
    BrowserModule
  ],
  declarations: [ProTeamComponent,ProTeamPlayersComponent,ProTeamMatchesComponent,ProTeamStatisticsComponent],
  providers:    [AuthGuard, ProTeamService,PagerService],
  bootstrap: [ProTeamComponent]
})
export class ProTeamModule { }