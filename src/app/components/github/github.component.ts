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
    languages:Object[];

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
            //console.log(repos);
            this.calculateLanguages(repos);
        })
        
    }
    calculateLanguages(repos){
        var lang=[];
        for (let repo of repos){
            //console.log(repo.languages_url);
            this._githubService.getLanguages(repo.languages_url).subscribe(language=>{
                lang.push(language);
                this._githubService.storeLanguageMap(language);

            })
        }
        this.languages=lang;
        //str = JSON.stringify(this.languages)
        console.log(this.languages);
        console.log(this._githubService.getLanguageMap());
    }

  ngOnInit() {
  }

}
