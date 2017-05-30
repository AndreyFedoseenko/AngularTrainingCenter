import { Component } from '@angular/core';
import { ResetPasswordModel } from '../../models/reset-password-model';
import { OnInit } from '@angular/core';
import {Router} from "@angular/router";
import { ResetPasswordService } from './reset-password.service';
import { DataService} from '../../services/data.service';
import { AppComponent }   from '../app/app.component';

@Component({
	selector: 'trainer-reset-password',
	templateUrl: './reset-password.component.view.html',
    styleUrls: [ './reset-password.component.styles.css' ],
    providers: [ResetPasswordService, DataService]
})
export class ResetPasswordComponent implements OnInit { 
    constructor(private rout: Router,
                private resetPasswordService: ResetPasswordService) {
     }
	title = 'Reset your password!';
    errorList = '';
    model: ResetPasswordModel;
    ngOnInit(): void {
        this.model = {
            Code : "",
            Email: "",
            NewPassword: "",
            ConfirmPassword: ""
        };
    } 
    resetPassword(): void{
        this.resetPasswordService.resetPassword(this.model, AppComponent.token)
        .then(resp => {
            this.rout.navigate(['/login']);
        })
        .catch(error => this.errorList = error);
    }
}