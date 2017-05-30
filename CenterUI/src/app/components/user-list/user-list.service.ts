import { Injectable } from '@angular/core';
import { Response }  from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { ViewUserModel } from '../../models/view-user-model';
import { DataService} from '../../services/data.service';


@Injectable()
export class UserListService {
    constructor (private dataService: DataService) {}
    blockUser(model:ViewUserModel,token: string):Promise<Response>{
        return this.dataService.post<ViewUserModel>("http://localhost:60415/api/Account/BlockUser",model,token);
    }
    enableUser(model:ViewUserModel,token: string):Promise<Response>{
        return this.dataService.post<ViewUserModel>("http://localhost:60415/api/Account/EnableUser",model,token);
    }
    getUsers(token: string):Promise<Response>{
        return this.dataService.get("http://localhost:60415/api/Account/GetUsers",token);
    }
}