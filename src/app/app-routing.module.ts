import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotFoundComponent } from './components/not-found/not-found.component';
//home
import { HomeComponent } from './components/home/home.component';
//login
import { LoginComponent } from './components/login/login.component';
//register
import { RegisterComponent } from './components/register/register.component';
//league

//team

//user
import { UserComponent } from './components/user/user.component';
//users
const routes: Routes = [
  //importacion de componentes
  {path: '', component: HomeComponent}, //un solo uso | va a ser la primer ruta que se mostrará (primer componente)
  {path: '', redirectTo: 'home', pathMatch: 'full'},
  //home
 {path: 'home', component: HomeComponent},
 //login
 {path: 'login', component: LoginComponent},
 //register
 {path: 'register', component: RegisterComponent},
 //league

 //team

 //user
 {path: 'user', component: UserComponent},
 //users

  {path: '**', component: NotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
