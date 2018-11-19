import {  
    Injectable,  
    Inject  
} from '@angular/core';  
import {  
    Http,  
    Response,
    Headers
} from '@angular/http';  
import {  
    Observable  
} from 'rxjs/Observable';  
import {  
    Router  
} from '@angular/router';  
import { ConfigService } from '../shared/utils/config.service';
import 'rxjs/add/operator/map';  
import 'rxjs/add/operator/catch';  
import 'rxjs/add/observable/throw';


@Injectable()  
export class TournamentService {  
    myAppUrl: string = "";  
    constructor(private _http: Http, private configService: ConfigService) {  
        this.myAppUrl = configService.getApiURI();
    }  
    getTournaments() {  
        let headers = new Headers();
        headers.append('Content-Type', 'application/json');
        let authToken = localStorage.getItem('auth_token');
        headers.append('Authorization', `Bearer ${authToken}`);
        return this._http.get(this.myAppUrl + "/tournament",{headers}).map((response: Response) => response.json()).catch(this.errorHandler);  
    }  
    getTournamentById(TournamentID: number) {  
        let headers = new Headers();
        headers.append('Content-Type', 'application/json');
        let authToken = localStorage.getItem('auth_token');
        headers.append('Authorization', `Bearer ${authToken}`);
        return this._http.get(this.myAppUrl + "/tournament/getbyid/" + TournamentID,{headers}).map((response: Response) => response.json()).catch(this.errorHandler)  
    }  
    deleteTournament(TournamentID: number) {  
        let headers = new Headers();
        headers.append('Content-Type', 'application/json');
        let authToken = localStorage.getItem('auth_token');
        headers.append('Authorization', `Bearer ${authToken}`);
        return this._http.delete(this.myAppUrl + "/tournament/delete/" + TournamentID,{headers}).map((response: Response) => response.json()).catch(this.errorHandler);  
    }  
    updateTournament(tournament: any) {  
        let headers = new Headers();
        headers.append('Content-Type', 'application/json');
        let authToken = localStorage.getItem('auth_token');
        headers.append('Authorization', `Bearer ${authToken}`);
        return this._http.put(this.myAppUrl + '/tournament/update', tournament,{headers}).map((response: Response) => response.json()).catch(this.errorHandler);  
    }  
    saveTournament(tournament: any) {  
        let headers = new Headers();
        headers.append('Content-Type', 'application/json');
        let authToken = localStorage.getItem('auth_token');
        headers.append('Authorization', `Bearer ${authToken}`);
        return this._http.post(this.myAppUrl + '/tournament/create', tournament,{headers}).map((response: Response) => response.json()).catch(this.errorHandler)  
    }  
    errorHandler(error: Response) {  
        
        console.log(error);  
        return Observable.throw(error.json().error || 'Server error');  
    }  
}  