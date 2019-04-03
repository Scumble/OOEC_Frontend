import { Injectable } from '@angular/core';
 
@Injectable()
export class ConfigService {
     
    _apiURI : string;
 
    constructor() {
        this._apiURI = 'http://ooecapi20190403085607.azurewebsites.net/api';
     }
 
     getApiURI() {
         return this._apiURI;
     }    
}
 