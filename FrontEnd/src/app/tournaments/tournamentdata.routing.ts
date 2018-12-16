import { ModuleWithProviders } from '@angular/core';
import { RouterModule }        from '@angular/router';
import { LobbiesComponent }    from '../lobbies/lobbies.component';
import { TournamentDataComponent }    from './tournamentdata.component';
import {AddTournament} from './addTournament/addtournament.component'
import { AuthGuard } from '../auth.guard';
import { TeamComponent } from '../teams/teams.component';

export const routing: ModuleWithProviders = RouterModule.forChild([
  { path: 'tournaments', component: TournamentDataComponent,canActivate: [AuthGuard]},
  {path:'addtournament',component:AddTournament,canActivate: [AuthGuard]},
  {path: 'tournament/edit/:tournamentID',  component: AddTournament,canActivate: [AuthGuard]},
  {path: 'lobby/getcreatedbytournament/:tournamentID',  component: LobbiesComponent,canActivate: [AuthGuard]},
  {path:'teams',component:TeamComponent,canActivate: [AuthGuard]}
]);