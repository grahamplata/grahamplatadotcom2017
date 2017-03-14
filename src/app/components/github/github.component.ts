import { Component } from '@angular/core';
import { GithubService } from '../../services/github.service'

@Component({
  selector: 'app-github',
  templateUrl: './github.component.html',
  styleUrls: ['./github.component.css']
})
export class GithubComponent {
  user: any[];
  repos: any[];

  constructor(private _githubservice: GithubService) {
    this._githubservice.getUser().subscribe(user => {
      this.user = user;
      console.log(user);
    });

    this._githubservice.getRepos().subscribe(repos => {
      this.repos = repos;
      console.log(repos);
    });
  }
}