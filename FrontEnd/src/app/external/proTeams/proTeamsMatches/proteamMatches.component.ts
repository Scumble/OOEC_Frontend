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
    templateUrl: './proteamMatches.component.html',
    styleUrls: ['./../proteams.component.scss']
  })  
  export class ProTeamMatchesComponent implements OnInit {  
    TeamId:number;
    pager: any = {};
    pagedItems: any[];
    public proteamMatcheslist: ProTeamMatchesList[];   
    constructor(public http: Http, private _router: Router, private _proteamMatchesService: ProTeamService,private pagerService: PagerService,private _Activatedroute:ActivatedRoute) { 
       this.TeamId=this._Activatedroute.snapshot.params['teamID']; 
    }  
    ngOnInit() {
      this.getTeamMatches(this.TeamId);
        
    }
    getTeamMatches(TeamId:number) {  
      this._proteamMatchesService.getTeamMatches(TeamId).subscribe(data => {
      this.proteamMatcheslist = data;
      this.setPage(1);
      console.log(this.proteamMatcheslist);
      }, 
      error=> {
          console.log(error);
      })
  }
    setPage(page: number) {
      this.pager = this.pagerService.getPager(this.proteamMatcheslist.length, page);
      this.pagedItems = this.proteamMatcheslist.slice(this.pager.startIndex, this.pager.endIndex + 1);
  }   
  }  
  interface ProTeamMatchesList {  
    Match_id:number;
    Radiant_win:boolean;
    Radiant:boolean;
    Duration:number;
    Start_time:number;
    Leagueid:number;
    League_name:string;
    cluster:number;
    Opposing_team_id:number;
    Opposing_team_name:string;
    Opposing_team_logo:string;

  }  
  