import { Routes,RouterModule } from '@angular/router';  
// import { AppComponent } from './app.component';
import { UsernameComponent } from './components/username/username.component';
import { PasswordComponent } from './components/password/password.component';
import { UserhomeComponent } from './components/userhome/userhome.component';

const routes: Routes = [  
{ path: 'GotoPassword', component: PasswordComponent },  
{ path: 'GotoUserName', component: UsernameComponent },  
{ path: 'GotoUserHome', component: UserhomeComponent },  
];

export const obj=RouterModule.forRoot(routes); 