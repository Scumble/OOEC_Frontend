import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule,ReactiveFormsModule}  from '@angular/forms';
import { SharedModule }   from '../shared/modules/shared.module';
import { BrowserModule } from '@angular/platform-browser';
import { TournamentService }  from '../services/tournamentservices';

import { routing }  from './tournamentdata.routing';
import { TournamentDataComponent } from './tournamentdata.component';
import {AddTournament} from './addTournament/addtournament.component'
import { AuthGuard } from '../auth.guard';


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
  declarations: [TournamentDataComponent,AddTournament],
  providers:    [AuthGuard, TournamentService ]
})
export class TournamentModule { }