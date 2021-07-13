import { Component, OnInit } from '@angular/core';
import { RestLeagueService } from '../../services/restLeague/rest-league.service';
import { RestUserService } from '../../services/restUser/rest-user.service';
import { League } from '../../models/league.model';
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
  searchLeague;
  public message;
  public user;
  public leagueSelected:League;




  constructor(private restLeague:RestLeagueService, private restUser:RestUserService) {}

  ngOnInit(): void {
    this.leagueSelected = new League('','','',null)
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

}