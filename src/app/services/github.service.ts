import { Injectable } from '@angular/core';
import {Http,Headers} from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class GithubService {
private username = 'armaango';
    private client_id = 'd819b4da56e103f036d7';
    private client_secret='525ed9b0a80b13183271625a4a293bd0635a0add';
    languageMap = new Map();

    constructor(private _http:Http) {
        console.log('Github service init');
    }

    getUser() {
       return this._http.get(`https://api.github.com/users/${this.username}`)
            .map(res=>res.json());
    }
    getRepos() {
       return this._http.get(`https://api.github.com/users/${this.username}/repos?per_page=100`)
            .map(res=>res.json());
    }
    updateUsername(username:string) {
        this.username=username;
    }
    getLanguages(url:string){
        return this._http.get(url).map(res=>res.json());
    }
    storeLanguageMap(language:Object){
        var languageArray = Object.keys(language);
        for (var j=0; j<languageArray.length; j++) {
        var name = languageArray[j];
        var value = language[name];
        console.log(value);
        if(!this.languageMap.get(name)){
            this.languageMap.set(name,value);
        } else {
            var tempVal = this.languageMap.get(name);
            tempVal+=value;
            this.languageMap.set(name,tempVal);
        }
    // Do something
}
    }
    getLanguageMap(){
        return this.languageMap;
    }

}
