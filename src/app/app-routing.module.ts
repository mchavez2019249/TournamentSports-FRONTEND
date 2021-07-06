import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { UserComponent } from './components/user/user.component';
import { ListUsersComponent } from './components/list-users/list-users.component';
import { ListTorneosComponent } from './components/list-torneos/list-torneos.component';
import { LeaguesComponent } from './components/leagues/leagues.component';
import { ResultsComponent } from './components/results/results.component';

const routes: Routes = [
  //importacion de componentes
  {path: '', component: LoginComponent}, //un solo uso | va a ser la primer ruta que se mostrará (primer componente)
  {path: '', redirectTo: 'home', pathMatch: 'full'},
  {path: 'home', component: HomeComponent},
  {path: 'login', component: LoginComponent},
  {path: 'register', component: RegisterComponent},
  {path: 'user', component: UserComponent},
  {path: 'listUsers', component: ListUsersComponent},
  {path: 'listLeague', component:ListTorneosComponent},
  {path: 'leagues', component:LeaguesComponent},
  {path: 'result', component: ResultsComponent},
  {path: '**', component: NotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
