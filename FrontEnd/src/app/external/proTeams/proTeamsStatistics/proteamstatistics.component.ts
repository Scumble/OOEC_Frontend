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
  @Component({  
    selector: 'proteam',  
    templateUrl: './proteamstatistics.component.html',
    styleUrls: ['./../proteams.component.scss']
  })  
  export class ProTeamStatisticsComponent implements OnInit {  
    MatchId:number;
    public proteamstatisticslist:[];   
    constructor(public http: Http, private _router: Router, private _proteamstatisticsService: ProTeamService,private _Activatedroute:ActivatedRoute) { 
       this.MatchId=this._Activatedroute.snapshot.params['matchID']; 
    }  
    ngOnInit() {
      this.getTeamStatistics(this.MatchId);
        
    }
    getTeamStatistics(MatchId:number) {  
      this._proteamstatisticsService.getTeamStatistics(MatchId).subscribe(data => {
      let res=data[0];
      let players=res["players"];
      this.proteamstatisticslist =res["players"];
      console.log(this.proteamstatisticslist);
      }, 
      error=> {
          console.log(error);
      })
  }  
}  
  