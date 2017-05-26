import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
import {Router} from "@angular/router";

import "bootstrap/dist/css/bootstrap.css";

@Component({
	selector: 'training-main',
	template: `
    <div class="row">
        <div class="col-md-4"></div>
        <div class="col-md-4">
            <h4>{{title}}</h4>
       </div>
    </div>
    <router-outlet></router-outlet>
  `,
})
export class AppComponent implements OnInit { 
    constructor(private rout: Router) {
     }
    ngOnInit(): void {
        this.rout.navigate(['/login']);
    }
	title = 'Hello in our center!';

}