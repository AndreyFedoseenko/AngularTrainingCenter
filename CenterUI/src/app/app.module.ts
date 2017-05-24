import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';
import { LoginComponent }   from '../app/components/login/login.component';
@NgModule({
  imports: [
    BrowserModule,
    FormsModule
  ],
  declarations:
      [LoginComponent ],
  bootstrap:    [ LoginComponent ]
})
export class AppModule { }