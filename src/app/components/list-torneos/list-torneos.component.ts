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
    this.listLeagues();
    this.token = this.restUser.getToken();
    this.user = this.restUser.getUser();
    
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
    this.leagueSelected._id = league;
    console.log(league._id)
  }

  deleteLeague(){
    console.log(this.user._id, this.leagueSelected);
    this.restLeague.deleteLeague(this.user._id, this.leagueSelected).subscribe((res:any)=>{
      if(res.leagueDelete){
        alert(res.message);
        localStorage.setItem('user', JSON.stringify(res.leagueDelete))
        this.user = this.restUser.getUser()
        
      }else{
        alert(res.message);
      }
    },
    error => alert(error.error.message))
  }

  listLeagues(){
    this.restLeague.getLeagues2(this.user).subscribe((res:any)=>{
      if(res.leaguefind){
        this.leagues = res.leagueFind;
        console.log(this.leagues)
      }else{
        alert(res.message)
      }
    },
    error => alert(error.error.message))
  }

}
