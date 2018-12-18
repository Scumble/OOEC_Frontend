import { ModuleWithProviders } from '@angular/core';
import { RouterModule }        from '@angular/router';

import { AuthGuard } from '../auth.guard';
import {PlayerComponent} from '../players/players.component'
import { AddPlayer } from './addPlayers/addplayers.component';


export const routing: ModuleWithProviders = RouterModule.forChild([
    {path:'addplayer',component:AddPlayer,canActivate: [AuthGuard]},
    {path: 'player/edit/:playerID',  component: AddPlayer,canActivate: [AuthGuard]}
]);