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
export class LobbyService {  
    myAppUrl: string = "";  
    constructor(private _http: Http, private configService: ConfigService) {  
        this.myAppUrl = configService.getApiURI();
    }  
    getLobbies(TournamentID: number) {  
        let headers = new Headers();
        headers.append('Content-Type', 'application/json');
        let authToken = localStorage.getItem('auth_token');
        headers.append('Authorization', `Bearer ${authToken}`);
        return this._http.get(this.myAppUrl + "/lobby/getLobbies/"+ TournamentID,{headers}).map((response: Response) => response.json()).catch(this.errorHandler);  
    }    
    getLobbyById(LobbyID: number) {  
        let headers = new Headers();
        headers.append('Content-Type', 'application/json');
        let authToken = localStorage.getItem('auth_token');
        headers.append('Authorization', `Bearer ${authToken}`);
        return this._http.get(this.myAppUrl + "/lobby/getbyid/" + LobbyID,{headers}).map((response: Response) => response.json()).catch(this.errorHandler);
    }  
    deleteLobby(LobbyID: number) {  
        let headers = new Headers();
        headers.append('Content-Type', 'application/json');
        let authToken = localStorage.getItem('auth_token');
        headers.append('Authorization', `Bearer ${authToken}`);
        return this._http.delete(this.myAppUrl + "/lobby/delete/" + LobbyID,{headers}).map((response: Response) => response.json()).catch(this.errorHandler);  
    }  
    updateLobby(lobby: any) {  
        let headers = new Headers();
        headers.append('Content-Type', 'application/json');
        let authToken = localStorage.getItem('auth_token');
        headers.append('Authorization', `Bearer ${authToken}`);
        return this._http.post(this.myAppUrl + '/lobby/update', lobby,{headers}).map((response: Response) => response.json()).catch(this.errorHandler);  
    }  
    saveLobby(lobby: any) {  
        let headers = new Headers();
        headers.append('Content-Type', 'application/json');
        let authToken = localStorage.getItem('auth_token');
        headers.append('Authorization', `Bearer ${authToken}`);
        return this._http.post(this.myAppUrl + '/lobby/create', lobby,{headers}).map((response: Response) => response.json()).catch(this.errorHandler); 
    }  
    errorHandler(error: Response) {  
        
        console.log(error);  
        return Observable.throw(error.json().error || 'Server error');  
    }  
}  