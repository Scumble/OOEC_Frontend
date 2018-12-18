import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'; 
import { HttpModule, XHRBackend } from '@angular/http';
import { AuthenticateXHRBackend } from './authenticate-xhr.backend';

import { routing } from './app.routing';

/* App Root */
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';

/* Account Imports */
import { AccountModule }  from './account/account.module';
/* Dashboard Imports */
import { DashboardModule }  from './dashboard/dashboard.module';
import {TournamentModule} from './tournaments/tournamentdata.module';
import { StreamModule } from './stream/stream.module';
import { UserModule } from './users/user.module';
import { ConfigService } from './shared/utils/config.service';
import { LobbyModule } from './lobbies/lobbies.module';
import { TeamModule } from './teams/teams.module';
import { ProTeamModule } from './external/proteams/proteams.module';
import { SharedModule } from './shared/modules/shared.module';
import { PlayerModule } from './players/players.module';




@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent
  ],
  imports: [
    AccountModule,
    DashboardModule,
    TournamentModule,
    UserModule,
    TeamModule,
    StreamModule,
    LobbyModule,
    PlayerModule,
    ProTeamModule,
    BrowserModule,
    FormsModule,
    HttpModule,
    routing
  ],
  providers: [ConfigService, { 
    provide: XHRBackend, 
    useClass: AuthenticateXHRBackend
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }