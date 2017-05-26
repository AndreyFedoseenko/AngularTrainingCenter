import { Component } from '@angular/core';
import { LoginModel } from '../../models/login-model';
import { LoginService } from './login.service';
import { OnInit } from '@angular/core';
import {Router} from "@angular/router";

import "bootstrap/dist/css/bootstrap.css";

@Component({
	selector: 'trainer-login',
	template: `
    <div class="row">
        <div class="col-md-4"></div>
        <div class="col-md-4">
            <div class="login-form">
            <h4>{{title}}</h4>
            <div><label>Please, enter your login!</label></div>
            <div class="input-group"><input class="form-control login-input" [(ngModel)]="userCreds.Username" plaseholder="login"/></div>
            <div><label>Please, enter your password!</label></div>
            <div class="input-group"><input class="form-control login-input" type="password" [(ngModel)]="userCreds.Password" plaseholder="password"/></div>
            <div class="login-btn"> <a class="btn btn-primary" (click)="submitCreds()">Submit</a></div>
            </div>
       </div>
    </div>
  `,
    styles:[`
        .login-input {
            border-radius: 5px !important;
        }
        .login-btn{
            margin-top:5px;
            text-align:center;
        }
        .login-form{
            display: inline-block;
        }
    `],
    providers: [LoginService]
})
export class LoginComponent implements OnInit { 
    constructor(private loginService: LoginService,
                private rout: Router) {
     }
	title = 'Enter credentials!';
    userCreds: LoginModel;
    ngOnInit(): void {
    }
    submitCreds(): void{
        this.loginService.sendCreds(this.userCreds).then(resp => {
            let z = resp.json();
            this.rout.navigate(['/']);
        });
    }   
}