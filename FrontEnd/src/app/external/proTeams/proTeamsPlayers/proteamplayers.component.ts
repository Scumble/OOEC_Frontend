import {  
    Component,  
    Inject,  
    OnInit
  } from '@angular/core';  
  import {  
    Http,  
    Headers  
  } from '@angular/http';  
  import {  
    ProTeamService  
  } from '../../../services/proteams.services'   
  import {  
    Router,  
    ActivatedRoute  
  } from '@angular/router';  
  import {PagerService} from '../../../shared/services/page.service'
  @Component({  
    selector: 'proteam',  
    templateUrl: './proteamplayers.component.html',
    styleUrls: ['./../proteams.component.scss']
  })  
  export class ProTeamPlayersComponent implements OnInit {  
    TeamId:number;
    pager: any = {};
    pagedItems: any[];
    public proteamplayerslist: ProTeamPlayersList[];   
    constructor(public http: Http, private _router: Router, private _proteamplayersService: ProTeamService,private pagerService: PagerService,private _Activatedroute:ActivatedRoute) { 
       this.TeamId=this._Activatedroute.snapshot.params['teamID']; 
    }  
    ngOnInit() {
      this.getTeamPlayers(this.TeamId);
        
    }
    getTeamPlayers(TeamId:number) {  
      this._proteamplayersService.getTeamPlayers(TeamId).subscribe(data => {
      this.proteamplayerslist = data;
      this.setPage(1);
      console.log(this.proteamplayerslist);
      }, 
      error=> {
          console.log(error);
      })
  }
    setPage(page: number) {
      this.pager = this.pagerService.getPager(this.proteamplayerslist.length, page);
      this.pagedItems = this.proteamplayerslist.slice(this.pager.startIndex, this.pager.endIndex + 1);
  }   
  }  
  interface ProTeamPlayersList {  
    Account_id:number;
    Name:string;
    Games_played:number;
    Wins:number;
    Is_current_team_member:boolean;
  }  
  