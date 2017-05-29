import { Component } from '@angular/core';
import { LoginModel } from '../../models/login-model';
import { LoginService } from './login.service';
import { OnInit } from '@angular/core';
import {Router} from "@angular/router";
import { AppComponent }   from '../app/app.component';
import { DataService} from '../../services/data.service';

import "bootstrap/dist/css/bootstrap.css";

@Component({
	selector: 'trainer-login',
	templateUrl: './login.component.view.html',
    styleUrls: [ './login.component.styles.css' ],
    providers: [LoginService, DataService]
})
export class LoginComponent implements OnInit { 
    constructor(private loginService: LoginService,
                private rout: Router) {
     }
	title = 'Enter credentials!';
    errorList = '';
    userCreds: LoginModel;
    ngOnInit(): void {
        this.userCreds = {
            Username : "",
            Password : ""
        };
    }
    submitCreds(): void{
        this.loginService.sendCreds(this.userCreds)
        .then(resp => {
            var respones = resp as any;
            let bodyRequest = JSON.parse(respones._body);
            AppComponent.SetLogined(bodyRequest.access_token);
            this.rout.navigate(['/intro']);
        })
        .catch(error => this.errorList = error);
    }   
}