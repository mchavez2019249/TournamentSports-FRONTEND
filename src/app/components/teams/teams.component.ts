import { Component, OnInit } from '@angular/core';
import { RestTeamService } from 'src/app/services/restTeam/rest-team.service';
import { RestUserService } from 'src/app/services/restUser/rest-user.service';
import { Team } from '../../models/team.model';
import { League } from '../../models/league.model';
import { fadeIn } from 'src/app/animations/animations';

@Component({
  selector: 'app-teams',
  templateUrl: './teams.component.html',
  styleUrls: ['./teams.component.css'],
  animations: [fadeIn]
})
export class TeamsComponent implements OnInit {
  public token;
  teams: [];

  searchTeam;
  public message;
  public user;
  public teamSelected: Team;
  public leagueSelected:League;
 

  constructor(private restTeam: RestTeamService, private restUser: RestUserService) { }

  ngOnInit(): void {
    this.teamSelected = new Team('', '', '', null, null, null, null, null, '')
    this.leagueSelected = new League('','','',null)
    this.user = this.restUser.getUser();
    this.token = this.restUser.getToken();
    this.listTeams();
  }

  /*onSubmit(createTeam){
    this.restTeam.saveTeam(this.user._id, this.teamSelected).subscribe((res:any)=>{
      if(res.teamSaved){
        alert(res.message);
        this.teamSelected = new Team('', '', '', null, null, null, null, null, '');
        createTeam.reset();
      }else{
        alert(res.message)
      }
      error =>{
        console.log(<any>error);
      }
    })
  }*/

  getTeam(team){
    this.teamSelected = team;
    console.log(team)
  }

  deleteTeam(){
    console.log(this.user._id, this.teamSelected);
    this.restTeam.deleteTeam(this.user._id, this.teamSelected).subscribe((res:any)=>{
      if(res.teamRemoved){
        alert(res.message);
      }else{
        alert(res.message);
      }
    },
    error => alert(error.error.message))
  }

  listTeams(){
    console.log(this.user);
    this.restTeam.getTeamsU(this.user._id).subscribe((res:any)=>{
      console.log(res)
      if(res.teamfind){
        this.teams = res.teamfind;

      }else{
        alert(res.message)
      }
    },
    error => alert(error.error.message))
  }

}