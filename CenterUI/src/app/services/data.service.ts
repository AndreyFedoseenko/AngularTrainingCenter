import {Injectable} from '@angular/core';
import {Type} from '@angular/core';
import { Http, Response, Headers, RequestOptions }  from '@angular/http';

import 'rxjs/add/operator/toPromise';

import 'rxjs';

@Injectable()
export class DataService {

    constructor(private http: Http) { }

    get(readUrl: string, token: string): Promise<Response> {
            //let stringForRequest = this.parsing.parsingEventObject(dataHandler);
        let headers = new Headers();
            return this.http.get(readUrl, { headers: headers })
                .toPromise()
                .catch(this.handleError);
    };

    authorize(authorizeUrl: string, username: string, password: string): Promise<Response> {
        let headers = new Headers({ 'Content-Type': 'application/x-www-form-urlencoded' });
        let options = new RequestOptions({ headers: headers});

        let strUserLog = "grant_type=password&username=" + username + "& password=" + password;
        return this.http.post(authorizeUrl, strUserLog, options)
            .toPromise();
    }

    post<T>(postUrl: string, createObj: T, token: string): Promise<Response> {
        let headers = new Headers();
        headers.append('Content-Type', 'application/json');
        if(token != ""){
            headers.append('Authorization', 'Bearer ' + token);
        }
        return this.http
            .post(postUrl, JSON.stringify(createObj), { headers: headers })
            .toPromise()
            .catch(this.handleError);
    }

    private handleError(error: any) {
        console.error('An error occurred', error);
        return Promise.reject(error.message || error);
    }
}