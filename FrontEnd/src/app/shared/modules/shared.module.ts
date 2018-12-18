import { NgModule }           from '@angular/core';
import { CommonModule }       from '@angular/common';
import { myFocus } from '../../directives/focus.directive';
import {SpinnerComponent} from '../../spinner/spinner.component';  
import { LobbiesComponent } from 'src/app/lobbies/lobbies.component';
import { AuthGuard } from 'src/app/auth.guard';
import { LobbyService } from 'src/app/services/lobbies.services';
import { RouterModule } from '@angular/router';
import { TournamentDataComponent } from 'src/app/tournaments/tournamentdata.component';
import { AddLobby } from 'src/app/lobbies/addlobby/addlobby.component';
import { AddTournament } from 'src/app/tournaments/addTournament/addtournament.component';
import { TeamComponent } from 'src/app/teams/teams.component';
import { PlayerComponent } from 'src/app/players/players.component';

@NgModule({
  imports:      [CommonModule,RouterModule],
  declarations: [myFocus,SpinnerComponent,LobbiesComponent,TournamentDataComponent,TeamComponent,PlayerComponent],
  exports:      [myFocus,SpinnerComponent,LobbiesComponent,TournamentDataComponent,TeamComponent,PlayerComponent],
  providers:    [AuthGuard,LobbyService]
})
export class SharedModule { }