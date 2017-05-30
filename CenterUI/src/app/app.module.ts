import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';
import { LoginComponent }   from '../app/components/login/login.component';
import { AppComponent }   from '../app/components/app/app.component';
import { IntroComponent }   from '../app/components/intro/intro.component';
import { ChangePasswordComponent }   from '../app/components/change-password/change-password.component';
import { ForgotPasswordComponent }   from '../app/components/forgot-password/forgot-password.component';
import { ResetPasswordComponent }   from '../app/components/reset-password/reset-password.component';
import { CreateUserComponent }   from '../app/components/create-user/create-user.component';
import { UserListComponent }   from '../app/components/user-list/user-list.component';
import { HttpModule, JsonpModule } from '@angular/http';
import { RouterModule, Routes }   from '@angular/router';
import "bootswatch/darkly/bootstrap.min.css";
import "jquery/src/jquery.js";
import "bootstrap/js/dropdown.js";

const routes: Routes = [
  { path: '', component: AppComponent },
  { path: 'login',  component: LoginComponent },
  { path: 'login',  component: LoginComponent },
  { path: 'intro', component: IntroComponent },
  { path: 'changePassword', component: ChangePasswordComponent },
  { path: 'forgotPassword', component: ForgotPasswordComponent },
  { path: 'resetPassword', component: ResetPasswordComponent },
  { path: 'createUser', component: CreateUserComponent },
  { path: 'userList', component: UserListComponent }
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
      [AppComponent, LoginComponent , IntroComponent, ChangePasswordComponent, ForgotPasswordComponent, ResetPasswordComponent, CreateUserComponent, UserListComponent],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }