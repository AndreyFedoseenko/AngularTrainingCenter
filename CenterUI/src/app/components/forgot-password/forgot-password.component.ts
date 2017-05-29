import { Component } from '@angular/core';
import { ForgotPasswordModel } from '../../models/forgot-password-model';
import { OnInit } from '@angular/core';
import {Router} from "@angular/router";
import { ForgotPasswordService } from './forgot-password.service';
import { DataService} from '../../services/data.service';
import { AppComponent }   from '../app/app.component';

import "bootstrap/dist/css/bootstrap.css";

@Component({
	selector: 'trainer-forgot-password',
	templateUrl: './forgot-password.component.view.html',
    styleUrls: [ './forgot-password.component.styles.css' ],
    providers: [ForgotPasswordService, DataService]
})
export class ForgotPasswordComponent implements OnInit { 
    constructor(private rout: Router,
                private forgotPasswordService: ForgotPasswordService) {
     }
	title = 'Restore your password!';
    errorList = '';
    model: ForgotPasswordModel;
    ngOnInit(): void {
        this.model = {
            Email : ""
        };
    } 
    forgotPassword(): void{
        this.forgotPasswordService.restorePassword(this.model, AppComponent.token)
        .then(resp => {
            this.rout.navigate(['/resetPassword']);
        })
        .catch(error => this.errorList = error);
    }
}