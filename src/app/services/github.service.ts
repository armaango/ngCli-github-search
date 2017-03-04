import { Injectable } from '@angular/core';
import {Http,Headers} from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class GithubService {
private username = 'armaango';
    private client_id = 'd819b4da56e103f036d7';
    private client_secret='525ed9b0a80b13183271625a4a293bd0635a0add';

    constructor(private _http:Http) {
        console.log('Github service init');
    }

    getUser() {
       return this._http.get(`https://api.github.com/users/${this.username}`)
            .map(res=>res.json());
    }
    getRepos() {
       return this._http.get(`https://api.github.com/users/${this.username}/repos?page=2&per_page=30`)
            .map(res=>res.json());
    }
    updateUsername(username:string) {
        this.username=username;
    }
    getLanguages(url:string){
        return this._http.get(url).map(res=>res.json());
    }

}
