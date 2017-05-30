import { Component } from '@angular/core';
import { ViewUserModel } from '../../models/view-user-model';
import { OnInit } from '@angular/core';
import {Router} from "@angular/router";
import { UserListService } from './user-list.service';
import { DataService} from '../../services/data.service';
import { AppComponent }   from '../app/app.component';

@Component({
	selector: 'trainer-user-list',
	templateUrl: './user-list.component.view.html',
    styleUrls: [ './user-list.component.styles.css' ],
    providers: [UserListService, DataService],

})
export class UserListComponent implements OnInit { 
    constructor(private rout: Router,
                private userListService: UserListService) {
     }
	title = 'List of users!';
    errorList = '';
    users: ViewUserModel[];
    ngOnInit(): void {
        this.userListService.getUsers(AppComponent.token).then(resp => {
            var respones = resp as any;
            let bodyRequest = JSON.parse(respones._body);
            this.users = bodyRequest;
        });
    }
    blockUser(user: ViewUserModel): void{
        this.userListService.blockUser(user, AppComponent.token)
        .then(resp => {
            user.IsEnable = false;
        })
        .catch(error => this.errorList = error);
    }
    enableUser(user: ViewUserModel): void{
        this.userListService.enableUser(user, AppComponent.token)
        .then(resp => {
            user.IsEnable = true;
        })
        .catch(error => this.errorList = error);
    }
}