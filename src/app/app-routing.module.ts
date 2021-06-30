import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotFoundComponent } from './components/not-found/not-found.component';
//home

//login

//register

//league

//team

//user

//users
const routes: Routes = [
  //importacion de componentes
  //{path: '', component: HomeComponent}, //un solo uso | va a ser la primer ruta que se mostrará (primer componente)
  //{path: '', redirectTo: 'home', pathMatch: 'full'},
  //home

 //login

 //register

 //league

 //team

 //user

 //users
 
  {path: '**', component: NotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
