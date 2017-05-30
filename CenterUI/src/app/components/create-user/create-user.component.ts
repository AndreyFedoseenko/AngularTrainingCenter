import { Component } from '@angular/core';
import { ViewUserModel } from '../../models/view-user-model';
import { OnInit } from '@angular/core';
import {Router} from "@angular/router";
import { CreateUserService } from './create-user.service';
import { DataService} from '../../services/data.service';
import { AppComponent }   from '../app/app.component';

@Component({
	selector: 'trainer-create-user',
	templateUrl: './create-user.component.view.html',
    styleUrls: [ './create-user.component.styles.css' ],
    providers: [CreateUserService, DataService],

})
export class CreateUserComponent implements OnInit { 
    constructor(private rout: Router,
                private createUserService: CreateUserService) {
     }
	title = 'Create user!';
    errorList = '';
    roles: string[];
    model: ViewUserModel;
    ngOnInit(): void {
        this.model = {
            Username: "",
            Role: "",
            IsEnable: true
        };
        this.createUserService.getRoles(AppComponent.token).then(resp => {
            var respones = resp as any;
            let bodyRequest = JSON.parse(respones._body);
            this.roles = bodyRequest;
        });
    }
    selectRole(role: string){
        this.model.Role = role;
    } 
    createUser(): void{
        this.createUserService.createUser(this.model, AppComponent.token)
        .then(resp => {
            this.rout.navigate(['/intro']);
        })
        .catch(error => this.errorList = error);
    }
}