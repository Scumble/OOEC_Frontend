import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule,ReactiveFormsModule}  from '@angular/forms';
import { SharedModule }   from '../shared/modules/shared.module';
import { BrowserModule } from '@angular/platform-browser';
import { LobbyService }  from '../services/lobbies.services';
import { routing }  from './lobbies.routing';
import { LobbiesComponent } from '../lobbies/lobbies.component';
import { AuthGuard } from '../auth.guard';
import {AddLobby} from './addlobby/addlobby.component'
import { Globals } from '../globals';

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
  declarations: [AddLobby],
  providers:    [AuthGuard, LobbyService,Globals]
})
export class LobbyModule { }