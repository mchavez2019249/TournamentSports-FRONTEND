import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { HomeComponent } from './components/home/home.component';
import { LeaguesComponent } from './components/leagues/leagues.component';
import { TeamsComponent } from './components/teams/teams.component';
import { UserComponent } from './components/user/user.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { SearchPipe } from './pipes/search.pipe';
import { ListUsersComponent } from './components/list-users/list-users.component';
import { ListTorneosComponent } from './components/list-torneos/list-torneos.component';
import { SearchLeaguePipe } from './pipes/search-league.pipe';
import { ListMatchComponent } from './components/list-match/list-match.component';
import { SearchTeamPipe } from './pipes/search-team.pipe';
import { GraphicsComponent } from './components/graphics/graphics.component';
import { ChartsModule } from '@rinminase/ng-charts';



@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    HomeComponent,
    LeaguesComponent,
    TeamsComponent,
    UserComponent,
    NavbarComponent,
    NotFoundComponent,
    SearchPipe,
    ListUsersComponent,
    ListTorneosComponent,
    SearchLeaguePipe,
    ListMatchComponent,
    SearchTeamPipe,
    GraphicsComponent,
  
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    HttpClientModule,
    ChartsModule
    
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
