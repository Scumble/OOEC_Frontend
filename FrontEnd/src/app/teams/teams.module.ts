import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule,ReactiveFormsModule}  from '@angular/forms';
import { SharedModule }   from '../shared/modules/shared.module';
import { BrowserModule } from '@angular/platform-browser';
import { routing }  from './teams.routing';
import { TeamComponent } from './teams.component';
import { AuthGuard } from '../auth.guard';
import { Globals } from '../globals';
import { TeamService } from '../services/teams.services';

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
  declarations: [],
  providers:    [AuthGuard, TeamService,Globals]
})
export class TeamModule { }