import {  
  Component,  
  Inject  
} from '@angular/core';  
import {  
  Http,  
  Headers  
} from '@angular/http';  
import {  
  LobbyService  
} from '../services/lobbies.services'  
import {  
  Router,  
  ActivatedRoute  
} from '@angular/router';  
import { Globals } from '../globals';
@Component({  
  selector: 'lobbies',  
  templateUrl: './lobbies.component.html'  
})  
export class LobbiesComponent {  
  public lobbylist: LobbyList[];  
  constructor(public http: Http, private _router: Router, private _lobbyService: LobbyService,private _Activatedroute:ActivatedRoute, private globals:Globals) {  
      globals.TournamentId=this._Activatedroute.snapshot.params['tournamentID'];
      this.getLobbies(globals.TournamentId);  
  }  
  getLobbies(TournamentId:number) {  
      this._lobbyService.getLobbies(TournamentId).subscribe(data => {
      this.lobbylist = data;
      console.log(this.lobbylist);
      }, 
      error=> {
          console.log(error);
      })
  }  
  deleteLobbies(Id: number) {  
      var ans = confirm("Do you want to delete lobby with Id: " + Id);  
      if (ans) {  
          this._lobbyService.deleteLobby(Id).subscribe((data) => {  
              this.getLobbies(this.globals.TournamentId);  
          }, error => console.error(error))  
      }  
  }
}  
interface LobbyList {  
  Id: number;  
  DateStart: string;  
  ScoreWinner: number;  
  TournamentId: number;  
  Winner: string;  
  ScoreLoser:number;
  Radiant_team_name:string;
  Dire_team_name:string;
}  