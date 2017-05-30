import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
import {Router} from "@angular/router";

@Component({
	selector: 'training-main',
	templateUrl: './app.component.view.html',
})
export class AppComponent implements OnInit { 
        constructor(private rout: Router) {
        }
        static token = "";
        static roleName = "";
        static isLogin = false;
        ngOnInit(): void {
            if(AppComponent.isLogin){
                this.rout.navigate(['/intro']);
            }
            else{
                this.rout.navigate(['/login']);
            }
        }
        static SetLogined(token: string,roleName: string) {
            AppComponent.token = token;
            AppComponent.roleName = roleName;
            AppComponent.isLogin = true;
        }
        isUserLogined(): boolean {
            return AppComponent.isLogin;
        }
        isUserOwner(): boolean {
            return AppComponent.isLogin && AppComponent.roleName == "owner";
        }
	title = 'Hello in our center!';

}