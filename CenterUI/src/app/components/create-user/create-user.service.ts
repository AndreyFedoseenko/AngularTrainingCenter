import { Injectable } from '@angular/core';
import { Response }  from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { ViewUserModel } from '../../models/view-user-model';
import { DataService} from '../../services/data.service';


@Injectable()
export class CreateUserService {
    constructor (private dataService: DataService) {}
    createUser(model:ViewUserModel,token: string):Promise<Response>{
        return this.dataService.post<ViewUserModel>("http://localhost:60415/api/Account/CreateUser",model,token);
    }
    getRoles(token: string):Promise<Response>{
        return this.dataService.get("http://localhost:60415/api/Account/GetRoles",token);
    }
}