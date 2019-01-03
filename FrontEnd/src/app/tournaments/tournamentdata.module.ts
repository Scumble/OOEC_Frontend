import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule,ReactiveFormsModule}  from '@angular/forms';
import { SharedModule }   from '../shared/modules/shared.module';
import { BrowserModule } from '@angular/platform-browser';
import { TournamentService }  from '../services/tournamentservices';
import { routing }  from './tournamentdata.routing';
import { TournamentDataComponent } from './tournamentdata.component';
import { LobbiesComponent } from '../lobbies/lobbies.component';
import {AddTournament} from './addTournament/addtournament.component'
import { AuthGuard } from '../auth.guard';
import { LobbyService } from '../services/lobbies.services';
import { TeamService } from '../services/teams.services';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    routing,
    CommonModule,
    ReactiveFormsModule,
    BrowserModule,
    SharedModule
  ],
  declarations: [AddTournament],
  providers:    [AuthGuard, TournamentService,LobbyService,TeamService]
})
export class TournamentModule { }