import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { CONNECTION } from '../global';
import { map } from 'rxjs/operators';
import { RestUserService } from '../restUser/rest-user.service';

@Injectable({
  providedIn: 'root'
})
export class RestResultsService {
  public team;
  public token;
  public uri: string;
  public httOptionsAuth = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': this.restUser.getToken()
    })
  };
  constructor(private http:HttpClient, private restUser: RestUserService, ) {
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

  private extractData(res: Response){
    let body = res;
    return body  ||[]||{};
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
