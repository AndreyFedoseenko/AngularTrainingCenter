import { Injectable } from '@angular/core';
import { Response }  from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { ResetPasswordModel } from '../../models/reset-password-model';
import { DataService} from '../../services/data.service';


@Injectable()
export class ResetPasswordService {
    constructor (private dataService: DataService) {}
    resetPassword(model:ResetPasswordModel,token: string):Promise<Response>{
        return this.dataService.post<ResetPasswordModel>("http://localhost:60415/api/Account/ResetPassword",model,token);
    }
}