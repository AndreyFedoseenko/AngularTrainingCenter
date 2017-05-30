import { Component } from '@angular/core';
import { ChangePasswordModel } from '../../models/change-password-model';
import { OnInit } from '@angular/core';
import {Router} from "@angular/router";
import { ChangePasswordService } from './change-password.service';
import { DataService} from '../../services/data.service';
import { AppComponent }   from '../app/app.component';

@Component({
	selector: 'trainer-change-password',
	templateUrl: './change-password.component.view.html',
    styleUrls: [ './change-password.component.styles.css' ],
    providers: [ChangePasswordService, DataService]
})
export class ChangePasswordComponent implements OnInit { 
    constructor(private rout: Router,
                private changePasswordService: ChangePasswordService) {
     }
	title = 'Change password!';
    errorList = '';
    model: ChangePasswordModel;
    ngOnInit(): void {
        this.model = {
            OldPassword : "",
            NewPassword : "",
            ConfirmPassword : ""
        };
    } 
    changePassword(): void{
        this.changePasswordService.changePassword(this.model, AppComponent.token)
        .then(resp => {
            this.rout.navigate(['/intro']);
        })
        .catch(error => this.errorList = error);
    }
}