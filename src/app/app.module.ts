import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { obj } from './app.routes';
import { AppComponent } from './app.component';
import { UsernameComponent } from './components/username/username.component';
import { PasswordComponent } from './components/password/password.component';
import { UserhomeComponent } from './components/userhome/userhome.component';

@NgModule({
  declarations: [
    AppComponent,
    UsernameComponent,
    PasswordComponent,
    UserhomeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    obj
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
