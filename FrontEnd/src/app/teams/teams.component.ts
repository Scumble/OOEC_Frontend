import {  
  Component,  
  Inject  
} from '@angular/core';  
import {  
  Http,  
  Headers  
} from '@angular/http';  
import {  
  TeamService  
} from '../services/teams.services'   
import {  
  Router,  
  ActivatedRoute  
} from '@angular/router';  
@Component({  
  selector: 'teams',  
  templateUrl: './teams.component.html'  
})  
export class TeamComponent {  
  public teamlist: TeamList[];   
  constructor(public http: Http, private _router: Router, private _teamService: TeamService) {  
      this.getTeams();  
  }  
  getTeams() {  
      this._teamService.getTeams().subscribe(data => {
      this.teamlist = data;
      console.log(this.teamlist);
      }, 
      error=> {
          console.log(error);
      })
  }  
  deleteTeam(Id: number) {  
      var ans = confirm("Do you want to delete team with Id: " + Id);  
      if (ans) {  
          this._teamService.deleteTeam(Id).subscribe((data) => {  
              this.getTeams();  
          }, error => console.error(error))  
      }  
  }   
}  
interface TeamList {  
  Id: number;  
  TeamName:string;
  Tag:string;
  NumberOfPlayers:number;
  RadiantLobbies:[],
  DireLobbies:[],
  Players:[]
}  
