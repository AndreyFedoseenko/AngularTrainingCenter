import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
import {Router} from "@angular/router";

import "bootstrap/dist/css/bootstrap.css";

@Component({
	selector: 'training-main',
	templateUrl: './app.component.view.html',
})
export class AppComponent implements OnInit { 
        constructor(private rout: Router) {
        }
        static token = "";
        static isLogin = false;
        ngOnInit(): void {
            if(AppComponent.isLogin){
                this.rout.navigate(['/intro']);
            }
            else{
                this.rout.navigate(['/login']);
            }
        }
        static SetLogined(token: string) {
            AppComponent.token = token;
            AppComponent.isLogin = true;
        }
        isUserLogined(): boolean {
            return AppComponent.isLogin;
        }
	title = 'Hello in our center!';

}