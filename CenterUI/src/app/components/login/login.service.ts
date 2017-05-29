import { Injectable } from '@angular/core';
import { Response }  from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { LoginModel } from '../../models/login-model';
import { DataService} from '../../services/data.service';


@Injectable()
export class LoginService {
    constructor (private dataService: DataService) {}
    sendCreds(model:LoginModel):Promise<Response>{
        return this.dataService.authorize("http://localhost:60415/Token",model.Username, model.Password);
    }
}