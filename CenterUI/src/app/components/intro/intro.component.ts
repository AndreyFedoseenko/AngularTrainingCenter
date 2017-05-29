import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
import {Router} from "@angular/router";
import { AppComponent }   from '../app/app.component';

import "bootstrap/dist/css/bootstrap.css";

@Component({
	selector: 'training-intro',
	templateUrl: './intro.component.view.html'
})
export class IntroComponent implements OnInit { 
    constructor(private rout: Router) {
     }
    ngOnInit(): void {
        var z = AppComponent.isLogin;
        //this.rout.navigate(['/login']);
    }
	title = 'Hello in our center!';

}