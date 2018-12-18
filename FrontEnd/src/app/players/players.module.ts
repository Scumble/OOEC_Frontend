import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule,ReactiveFormsModule}  from '@angular/forms';
import { SharedModule }   from '../shared/modules/shared.module';
import { BrowserModule } from '@angular/platform-browser';
import { routing }  from './players.routing';
import { PlayerComponent } from './players.component';
import { AuthGuard } from '../auth.guard';
import { Globals } from '../globals';
import { PlayerService } from '../services/players.services';
import { AddPlayer } from './addPlayers/addplayers.component';

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
  declarations: [AddPlayer],
  providers:    [AuthGuard,Globals,PlayerService]
})
export class PlayerModule { }