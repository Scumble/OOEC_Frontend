import { ModuleWithProviders } from '@angular/core';
import { RouterModule }        from '@angular/router';

import { LobbiesComponent }    from '../lobbies/lobbies.component';
import { AuthGuard } from '../auth.guard';
import {AddLobby} from './addlobby/addlobby.component'

export const routing: ModuleWithProviders = RouterModule.forChild([
  {path:'addlobby',component:AddLobby,canActivate: [AuthGuard]},
  {path: 'lobby/edit/:lobbyID',  component: AddLobby,canActivate: [AuthGuard]}
]);