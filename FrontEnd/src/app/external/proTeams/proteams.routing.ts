import { ModuleWithProviders } from '@angular/core';
import { RouterModule }        from '@angular/router';
import { ProTeamPlayersComponent } from './proTeamsPlayers/proteamplayers.component';
import { ProTeamComponent }    from './proteams.component';
import { AuthGuard } from '../../auth.guard';
import { ProTeamMatchesComponent } from './proTeamsMatches/proteamMatches.component';

export const routing: ModuleWithProviders = RouterModule.forChild([
    {path: 'proteams',  component: ProTeamComponent,canActivate: [AuthGuard]},
    {path: 'proplayers/:teamID',  component: ProTeamPlayersComponent,canActivate: [AuthGuard]},
    {path: 'proMatches/:teamID',  component: ProTeamMatchesComponent,canActivate: [AuthGuard]},
]);