import { Component, OnInit } from '@angular/core';
import {GithubService} from '../../services/github.service';

@Component({
  selector: 'app-github',
  templateUrl: './github.component.html',
  providers:[GithubService]
})
export class GithubComponent implements OnInit {
user:any;
    repos:any;
    username:string;
    constructor(private _githubService:GithubService) {
        console.log('Github Component init');

        
    }

    search() {
        this._githubService.updateUsername(this.username);
        this._githubService.getUser().subscribe(user=>{
            this.user = user;
        });

        this._githubService.getRepos().subscribe(repos=>{
            this.repos = repos;
        })
    }
  ngOnInit() {
  }

}
