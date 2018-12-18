import {  
  Component,  
  Inject  
} from '@angular/core';  
import {  
  Http,  
  Headers  
} from '@angular/http';  
import {  
  ProTeamService  
} from '../../services/proteams.services'   
import {  
  Router,  
  ActivatedRoute  
} from '@angular/router';  
import {PagerService} from '../../shared/services/page.service'
@Component({  
  selector: 'proteams',  
  templateUrl: './proteams.component.html',
  styleUrls: ['./proteams.component.scss']
})  
export class ProTeamComponent {  
  pager: any = {};
  pagedItems: any[];
  public proteamlist: ProTeamList[];   
  constructor(public http: Http, private _router: Router, private _proteamService: ProTeamService,private pagerService: PagerService) {  
    this.getTeams();  
  }  
  getTeams() {  
      this._proteamService.getTeams().subscribe(data => {
      this.proteamlist = data;
      this.setPage(1);
      console.log(this.proteamlist);
      }, 
      error=> {
          console.log(error);
      })
  }
  setPage(page: number) {
    this.pager = this.pagerService.getPager(this.proteamlist.length, page);
    this.pagedItems = this.proteamlist.slice(this.pager.startIndex, this.pager.endIndex + 1);
}   
}  
interface ProTeamList {  
  Team_Id: number;  
  Rating:number;
  Wins:number;
  Losses:number;
  Last_match_time:number;
  Name:string;
  Tag:string;
}  
