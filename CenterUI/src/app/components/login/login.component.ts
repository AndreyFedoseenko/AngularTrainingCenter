import { Component } from '@angular/core';
import { UserModel } from '../../models/user-model';
import { LoginService } from './login.service';
import { OnInit } from '@angular/core';
import {Router} from "@angular/router";
import { AppComponent }   from '../app/app.component';
import { DataService} from '../../services/data.service';

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
    userCreds: UserModel;
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
            AppComponent.SetLogined(bodyRequest.access_token,bodyRequest.roleName);
            this.rout.navigate(['/intro']);
        })
        .catch(error => {
            var respones = error as any;
            let bodyRequest = JSON.parse(respones._body);
            this.errorList = bodyRequest.error_description;
         });
    }   
}