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
export class ProTeamService {  
    myAppUrl: string = "";  
    constructor(private _http: Http, private configService: ConfigService) {  
        this.myAppUrl = configService.getApiURI();
    }  
    getTeams() {  
        let headers = new Headers();
        headers.append('Content-Type', 'application/json');
        let authToken = localStorage.getItem('auth_token');
        headers.append('Authorization', `Bearer ${authToken}`);
        return this._http.get(this.myAppUrl + "/proteams/getTeams" ,{headers}).map((response: Response) => response.json()).catch(this.errorHandler);  
    }    
    getTeamPlayers(TeamId:number) {
        let headers = new Headers();
        headers.append('Content-Type', 'application/json');
        let authToken = localStorage.getItem('auth_token');
        headers.append('Authorization', `Bearer ${authToken}`);
        return this._http.get(this.myAppUrl + "/proteams/getTeamPlayers/"+TeamId ,{headers}).map((response: Response) => response.json()).catch(this.errorHandler);  
    }
    getTeamMatches(TeamId:number) {
        let headers = new Headers();
        headers.append('Content-Type', 'application/json');
        let authToken = localStorage.getItem('auth_token');
        headers.append('Authorization', `Bearer ${authToken}`);
        return this._http.get(this.myAppUrl + "/proteams/getTeamMatches/"+TeamId ,{headers}).map((response: Response) => response.json()).catch(this.errorHandler);  
    }
    getTeamStatistics(MatchId:number) {
        let headers = new Headers();
        headers.append('Content-Type', 'application/json');
        let authToken = localStorage.getItem('auth_token');
        headers.append('Authorization', `Bearer ${authToken}`);
        return this._http.get(this.myAppUrl + "/proteams/getTeamStatistics/"+MatchId ,{headers}).map((response: Response) => response.json()).catch(this.errorHandler);  
    }
    errorHandler(error: Response) {  
        
        console.log(error);  
        return Observable.throw(error.json().error || 'Server error');  
    }  
}  