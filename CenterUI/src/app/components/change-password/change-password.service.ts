import { Injectable } from '@angular/core';
import { Response }  from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { ChangePasswordModel } from '../../models/change-password-model';
import { DataService} from '../../services/data.service';


@Injectable()
export class ChangePasswordService {
    constructor (private dataService: DataService) {}
    changePassword(model:ChangePasswordModel,token: string):Promise<Response>{
        return this.dataService.post<ChangePasswordModel>("http://localhost:60415/api/Account/ChangePassword",model,token);
    }
}