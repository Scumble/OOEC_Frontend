import {  
    Component,  
    Inject  
} from '@angular/core';  
import {  
    Http,  
    Headers  
} from '@angular/http';  
import {  
    TournamentService  
} from '../services/tournamentservices'   
import {  
    Router,  
    ActivatedRoute  
} from '@angular/router';  
@Component({  
    selector: 'tournamentdata',  
    templateUrl: './tournamentdata.component.html'  
})  
export class TournamentDataComponent {  
    public tournamentlist: TournamentList[];   
    constructor(public http: Http, private _router: Router, private _tournamentService: TournamentService) {  
        this.getTournaments();  
    }  
    getTournaments() {  
        this._tournamentService.getTournamentsCreatedByUser().subscribe(data => {
        this.tournamentlist = data;
        console.log(this.tournamentlist);
        }, 
        error=> {
            console.log(error);
        })
    }  
    deleteTournament(Id: number) {  
        var ans = confirm("Do you want to delete tournament with Id: " + Id);  
        if (ans) {  
            this._tournamentService.deleteTournament(Id).subscribe((data) => {  
                this.getTournaments();  
            }, error => console.error(error))  
        }  
    }   
}  
interface TournamentList {  
    Id: number;  
    TournamentName: string;  
    Place: string;  
    Type: string;  
    PrizePool: number;  
    DateStart:string;
    DateEnd:string;
    Description:string;
    Game:string;
    Lobbies:[];
}  
 