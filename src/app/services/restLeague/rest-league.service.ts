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

  

  saveLeague(idUser,league){
    let headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': this.getToken()
    })
    let params = JSON.stringify(league);
    return this.http.post(this.uri+'saveLeague/'+idUser, params,{headers:headers})
    .pipe(map(this.extractData));
  }

  deleteLeague(idUser,idLeague){
    let headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': this.getToken()
    })
    return this.http.delete(this.uri+'deleteLeague/'+idUser+'/'+idLeague, {headers: headers})
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

  getLeagues2(idUser){
    
    return this.http.get(this.uri+ 'listLeagueU/'+idUser)
    .pipe(map(this.extractData))
  }

}

