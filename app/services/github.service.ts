import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class GitHubService{

    private username: string;
    private client_id = '670c06808d80048cc5e7';
    private client_secret = 'aa50f581b340852ede2814818e1e64efb4a33367';

    constructor(private _http: Http) {
        console.log('Github Service Running....');
        this.username = 'thepri10';
    }

    getUser() {
        return this._http.get('http://api.github.com/users/' + this.username + '?client_id=' + this.client_id + '&client_secret=' + this.client_secret)
                .map(res => res.json()); 
    }

    getRepos() {
        return this._http.get('http://api.github.com/users/' + this.username + '/repos?client_id=' + this.client_id + '&client_secret=' + this.client_secret)
                .map(res => res.json()); 
    }

    updateUser(username: string) {
        this.username = username;
    }
}