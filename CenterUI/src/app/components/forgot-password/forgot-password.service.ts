import { Injectable } from '@angular/core';
import { Response }  from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { ForgotPasswordModel } from '../../models/forgot-password-model';
import { DataService} from '../../services/data.service';


@Injectable()
export class ForgotPasswordService {
    constructor (private dataService: DataService) {}
    restorePassword(model:ForgotPasswordModel,token: string):Promise<Response>{
        return this.dataService.post<ForgotPasswordModel>("http://localhost:60415/api/Account/ForgotPassword",model,token);
    }
}