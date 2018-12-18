import {  
  Component,  
  Inject  
} from '@angular/core';  
import {  
  Http,  
  Headers  
} from '@angular/http';  
import {  
  PlayerService  
} from '../services/players.services'   
import {  
  Router,  
  ActivatedRoute  
} from '@angular/router';  
import { Globals } from '../globals';
@Component({  
  selector: 'players',  
  templateUrl: './players.component.html'  
})  
export class PlayerComponent {
  public playerlist: PlayerList[];   
  constructor(public http: Http, private _router: Router, private _playerService: PlayerService,private _Activatedroute:ActivatedRoute,private globals:Globals) {  
      globals.TeamId=this._Activatedroute.snapshot.params['teamID'];
      this.getPlayers(this.globals.TeamId);  
  }  
  getPlayers(TeamId:number) {  
      this._playerService.getPlayers(TeamId).subscribe(data => {
      this.playerlist = data;
      console.log(this.playerlist);
      }, 
      error=> {
          console.log(error);
      })
  }  
  deletePlayer(Id: number) {  
      var ans = confirm("Do you want to delete player with Id: " + Id);  
      if (ans) {  
          this._playerService.deletePlayer(Id).subscribe((data) => {  
              this.getPlayers(this.globals.TeamId);  
          }, error => console.error(error))  
      }  
  }   
}  
interface PlayerList {  
  Id: number;  
  Name: string;  
  Position: string;  
  Age:number;
  TeamId:number;
}  
