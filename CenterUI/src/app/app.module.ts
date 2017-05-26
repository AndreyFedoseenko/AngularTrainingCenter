import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';
import { LoginComponent }   from '../app/components/login/login.component';
import { AppComponent }   from '../app/components/app/app.component';
import { HttpModule, JsonpModule } from '@angular/http';
import { RouterModule, Routes }   from '@angular/router';

const routes: Routes = [
  { path: '', component: AppComponent },
  { path: 'login',  component: LoginComponent }
];

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    JsonpModule,
    RouterModule.forRoot(routes)
  ],
  declarations:
      [AppComponent, LoginComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }