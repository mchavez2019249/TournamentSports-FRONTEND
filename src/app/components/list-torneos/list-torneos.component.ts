import { Component, OnInit } from '@angular/core';
import { RestLeagueService } from '../../services/restLeague/rest-league.service';
import { RestUserService } from '../../services/restUser/rest-user.service';
import { RestResultsService } from '../../services/restResults/rest-results.service';
import { RestTeamService } from 'src/app/services/restTeam/rest-team.service';
import { League } from '../../models/league.model';
import { Team } from '../../models/team.model';
import { fadeIn } from 'src/app/animations/animations';
@Component({
  selector: 'app-list-torneos',
  templateUrl: './list-torneos.component.html',
  styleUrls: ['./list-torneos.component.css'],
  animations: [fadeIn]
})
export class ListTorneosComponent implements OnInit {
  public token;
  leagues:[];
  teams:[];
  searchLeague;
  public message;
  public user;
  public leagueSelected;
  public teamSelected;
  public teamSaved: string;




  constructor(private restLeague:RestLeagueService, private restUser:RestUserService, private restTeam:RestTeamService) {}

  ngOnInit(): void {
    this.leagueSelected = new League('','','',null)
    this.teamSelected = new Team('', '', '', null, null, null, null, null, '')
    this.user = this.restUser.getUser();
    this.token = this.restUser.getToken();
    this.listLeagues();

  
  }

  onSubmit(createLeague){
    this.restLeague.saveLeague(this.user._id, this.leagueSelected).subscribe((res:any)=>{
      if(res.savedL){
        alert(res.message);
        this.leagueSelected = new League('', '','', null);
        createLeague.reset();
      }else{
        alert(res.message)
      }
      error =>{
        console.log(<any>error);
      }
    })
  }

  getLeague(league){
    this.leagueSelected = league;
    console.log(league)
  }

  deleteLeague(){
    console.log(this.user._id, this.leagueSelected);
    this.restLeague.deleteLeague(this.user._id, this.leagueSelected).subscribe((res:any)=>{
      if(res.leagueDelete){
        alert(res.message);
      }else{
        alert(res.message);
      }
    },
    error => alert(error.error.message))
  }

  listLeagues(){
    console.log(this.user);
    this.restLeague.getLeagues2(this.user._id).subscribe((res:any)=>{
      console.log(res)
      if(res.leaguefind){
        this.leagues = res.leaguefind;

      }else{
        alert(res.message)
      }
    },
    error => alert(error.error.message))
  }
  
  listTeams(){
    console.log(this.leagueSelected, this.teams);
    this.restTeam.getTeamsInLeague(this.leagueSelected).subscribe((res:any)=>{
      console.log(res)
      if(res.team){
        alert(res.message)
        this.teams= res.team;
        console.log(res.team);
      }else{
        alert(res.message)
        console.log('no se pudo')
      }
    }, error=> alert(error.error.message));
  }


  saveTeam(){
    console.log(this.user);
    this.restTeam.saveTeam(this.user._id, this.teamSelected, this.leagueSelected).subscribe((res:any)=>{
      this.message = res.message;
      if(res.pushTeam){
        this.teamSaved = res.pushTeam.name;
        alert(res.message);
        //console.log(this.user)
      }else{
        console.log(this.message);
        alert(res.message);
      }
    },
    error=> console.log(<any>error)
    )
  }

}