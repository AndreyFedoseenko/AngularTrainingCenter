import { Component } from '@angular/core';
import { LoginModel } from '../../models/login-model';
import { LoginService } from '../../services/login.service';
import { OnInit } from '@angular/core';

@Component({
	selector: 'trainer-login',
	template: `
    <h1>{{title}}</h1>
  `,
    providers: [LoginService]
})
export class LoginComponent implements OnInit { 
    constructor(private loginService: LoginService) { }
	title = 'Enter credentials!';
    userCreds: LoginModel;
    ngOnInit(): void {

    }
}