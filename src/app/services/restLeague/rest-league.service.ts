import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { CONNECTION } from '../global';
import { map } from 'rxjs/operators';
import { RestUserService } from '../restUser/rest-user.service';



@Injectable({
  providedIn: 'root'
})
export class RestLeagueService {
  public user;
  public uri: string;
  public httOptionsAuth = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': this.restUser.getToken()
    })
  };
  public token;
  public league;
  private extractData(res: Response){
    let body = res;
    return body || [] || {};
  }


  constructor(private http:HttpClient, private restUser:RestUserService) { 
    this.uri = CONNECTION.URI;
  }

  test(){
    return 'Mensaje desde el servicio'
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

  getLeague(){
    let league = JSON.parse(localStorage.getItem('league'));
    if(league != null || league != undefined){
      this.league = league;
    }else{
      this.league = null;
    }
    return this.league;
  }

  saveLeague(idUser,league){
    let headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': this.getToken()
    })
    let params = JSON.stringify(league);
    return this.http.post(this.uri+'saveLeague/'+idUser, params,{headers:headers})
    .pipe(map(this.extractData));
  }

  deteleLeague(idUser,idLeague){
    let headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': this.getToken()
    })
    return this.http.delete(this.uri+'deleteLeague/'+idUser+idLeague, {headers: headers})
    .pipe(map(this.extractData))
  }

  getLeagues(){
    let headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': this.getToken()
    });
    return this.http.get(this.uri+ 'getLeagues', {headers: headers})
    .pipe(map(this.extractData))
  }
}