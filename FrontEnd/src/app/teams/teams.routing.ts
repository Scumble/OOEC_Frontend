import { ModuleWithProviders } from '@angular/core';
import { RouterModule }        from '@angular/router';

import { TeamComponent }    from './teams.component';
import { AuthGuard } from '../auth.guard';
import { AddTeam } from './addteams/addteams.component';
import {PlayerComponent} from '../players/players.component'
import { AllTeamComponent } from './allTeams/allTeams.component';


export const routing: ModuleWithProviders = RouterModule.forChild([
    {path:'addteam',component:AddTeam,canActivate: [AuthGuard]},
    {path: 'team/edit/:teamID',  component: AddTeam,canActivate: [AuthGuard]},
    {path:'players/:teamID',component:PlayerComponent,canActivate: [AuthGuard]},
    {path:'allTeams',component:AllTeamComponent,canActivate:[AuthGuard]}
]);