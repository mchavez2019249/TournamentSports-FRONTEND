import { Component, OnInit } from '@angular/core';
import { RestLeagueService } from '../../services/restLeague/rest-league.service';
import { RestUserService } from '../../services/restUser/rest-user.service';
import { Router } from '@angular/router';
import { League } from '../../models/league.model';
import { CONNECTION } from 'src/app/services/global';
import { fadeIn } from 'src/app/animations/animations';


@Component({
  selector: 'app-leagues',
  templateUrl: './leagues.component.html',
  styleUrls: ['./leagues.component.css'],
  animations: [fadeIn]
})
export class LeaguesComponent implements OnInit {
  public league:League;
  public token;
  public leagueLogg;
  leagues:[];
  searchLeague;
  public title;
  public possiblePass;
  public message;
  public status:boolean;
  public uri;
  public user;

  constructor(private restLeague:RestLeagueService, private restUser:RestUserService,private router:Router) {
    this.title = 'Your League';
    /*this.league = new League('','',[],[]);*/
    this.token = this.restLeague.getToken();
    /*this.leagueLogg = this.restLeague.getLeague();*/
    this.possiblePass = '';
    this.uri = CONNECTION.URI;
   }

   ngOnInit(): void {
    this.listLeagues();
    this.token = this.restUser.getToken();
    this.user = this.restUser.getUser();
  }

  listLeagues(){
    this.restLeague.getLeagues().subscribe((res:any)=>{
      if(res.leagueFind){
        this.leagues = res.leagueFind;
        console.log(this.leagues)
      }else{
        alert(res.message)
      }
    },
    error => alert(error.error.message))
  }


}
