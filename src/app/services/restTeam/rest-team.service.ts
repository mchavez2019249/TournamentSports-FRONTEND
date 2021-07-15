import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { CONNECTION } from '../global';
import { map } from 'rxjs/operators';
import { RestUserService } from '../restUser/rest-user.service';


@Injectable({
  providedIn: 'root'
})
export class RestTeamService {

  public user;
  public token;
  public team;
  public uri: string;
  public httOptionsAuth = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': this.restUser.getToken()
    })
  };

  private extractData(res: Response){
    let body = res;
    return body  ||[]||{};
  }

  constructor(private http:HttpClient, private restUser: RestUserService) { 
    this.uri = CONNECTION.URI;
  }

  getToken(){
    let token = localStorage.getItem('token');
    if(token != null || token != undefined){
      this.token = token;
    }else{
      this.token = null;
    }
    return this.token;
  }

  saveTeam(idUser, team, league){
    let headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': this.getToken()
    })
    let params = JSON.stringify(team);
    return this.http.post(this.uri+'saveTeam/'+idUser+'/'+league, params, {headers: headers})
    .pipe(map(this.extractData));
  }

  deleteTeam(idUser, idTeam){
    let headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': this.getToken()
    })
    return this.http.delete(this.uri+'deleteTeam/'+idUser+'/'+idTeam, {headers: headers})
    .pipe(map(this.extractData))
  }

  getTeams(){
    let headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': this.getToken()
    });
    return this.http.get(this.uri+ 'getTeams', {headers: headers})
    .pipe(map(this.extractData))
  }

  getTeamsU(idUser){
    let headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': this.getToken()
    });
    return this.http.get(this.uri+ 'listTeamU/'+idUser, {headers: headers})
    .pipe(map(this.extractData))

  }

  getTeamsInLeague(idLeague){
    let headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': this.getToken()
    });
    return this.http.get(this.uri+'listTeamsInLeague/'+idLeague, {headers: headers})
    .pipe(map(this.extractData))
  }


}
