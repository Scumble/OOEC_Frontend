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
  } from '../../services/teams.services'   
  import {  
    Router,  
    ActivatedRoute  
  } from '@angular/router';  
  import { Globals } from '../../globals';
  @Component({  
    selector: 'teams',  
    templateUrl: './allTeams.component.html'  
  })  
  export class AllTeamComponent {  
    public teamlist: TeamList[];   
    constructor(public http: Http, private _router: Router, private _teamService: TeamService,private _Activatedroute:ActivatedRoute,private globals:Globals) {  
        globals.TournamentId=this._Activatedroute.snapshot.params['tournamentID'];
        this.getTeams();  
    }  
    getTeams() {  
        this._teamService.getAllTeams().subscribe(data => {
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
  