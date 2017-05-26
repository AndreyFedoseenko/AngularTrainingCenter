import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions }  from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';
import { LoginModel } from '../../models/login-model';


@Injectable()
export class LoginService {
    constructor (private http: Http) {}
    sendCreds(model:LoginModel):Promise<Response>{
        let headers = new Headers({ 'Content-Type': 'application/json; charset=UTF-8' });
        //let options = new RequestOptions({ method:"POST", headers: headers, body:JSON.stringify(model),url: "http://localhost:60415/api/Account/Login"});
        let options = new RequestOptions({ headers: headers});

        //this.http.post("http://localhost:60415/api/Account/Login", model, options)
                    //.map(this.extractData);
        return this.http.post("http://localhost:60415/api/Account/ExternalLogin", JSON.stringify(model),options).toPromise();
         //this.http.request("http://localhost:60415/api/Account/Login",options).map(this.extractData)
                  //.catch(this.handleError).subscribe();
         //this.http.post("http://10.10.40.62/api/values", '{"Username":"Vasya"}',options).toPromise().then(
             //response => {
                //response.json();
             //}
         //);
    }

     private extractData(res: Response) {
        let body = res.json();
        return body.data || { };
    }
    private handleError (error: Response | any) {
        // In a real world app, you might use a remote logging infrastructure
        let errMsg: string;
        if (error instanceof Response) {
        const body = error.json() || '';
        const err = body.error || JSON.stringify(body);
        errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
        } else {
        errMsg = error.message ? error.message : error.toString();
        }
        console.error(errMsg);
        return Observable.throw(errMsg);
    }
}