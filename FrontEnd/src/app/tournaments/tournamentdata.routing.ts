import { ModuleWithProviders } from '@angular/core';
import { RouterModule }        from '@angular/router';

import { TournamentDataComponent }    from './tournamentdata.component';
import {AddTournament} from './addTournament/addtournament.component'
import { AuthGuard } from '../auth.guard';

export const routing: ModuleWithProviders = RouterModule.forChild([
  { path: 'tournaments', component: TournamentDataComponent,canActivate: [AuthGuard]},
  {path:'addtournament',component:AddTournament,canActivate: [AuthGuard]},
  {path: 'tournament/edit/:tournamentID',  component: AddTournament,canActivate: [AuthGuard]}  
]);