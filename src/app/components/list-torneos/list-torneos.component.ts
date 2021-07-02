import { Component, OnInit } from '@angular/core';
import { RestLeagueService } from '../../services/restLeague/rest-league.service';
import { League } from '../../models/league.model';
import { Router } from '@angular/router';
import { CONNECTION } from 'src/app/services/global';
import { fadeIn } from 'src/app/animations/animations';
@Component({
  selector: 'app-list-torneos',
  templateUrl: './list-torneos.component.html',
  styleUrls: ['./list-torneos.component.css'],
  animations: [fadeIn]
})
export class ListTorneosComponent implements OnInit {
  public league:League;
  public token;
  public leagueLogg;
  leagues:[];
  search;
  public title;
  public possiblePass;
  public message;
  public status:boolean;
  public uri;

  constructor(private restLeague:RestLeagueService,private router:Router) {
    this.title = 'Your League';
    this.league = new League('','',[],[]);
    this.token = this.restLeague.getToken();
    this.leagueLogg = this.restLeague.getLeague();
    this.possiblePass = '';
    this.uri = CONNECTION.URI;
   }

  ngOnInit(): void {
    this.listLeagues();
  }

  onSubmit(createLeague){
    this.restLeague.saveLeague(this.league).subscribe((res:any)=>{
      if(res.leagueSaved){
        alert(res.message);
        this.league = new League('', '',null, null);
        createLeague.reset();
      }else{
        alert(res.message)
      }
      error =>{
        console.log(<any>error);
      }
    })
  }

  deleteLeague(){
    this.restLeague.deteleLeague(this.league._id, this.possiblePass).subscribe((res:any)=>{
      if(!res.userRemoved){
        alert(res.message)
      }else{
        alert(res.message);
        localStorage.clear();
        this.router.navigateByUrl('login')
      }
    },
    error=> alert(error.error.message))
  }

  listLeagues(){
    this.restLeague.getLeagues().subscribe((res:any)=>{
      if(res.leagues){
        this.leagues = res.leagues;
        console.log('Ligas cargadas')
      }else{
        alert(res.message)
      }
    },
    error => alert(error.error.message))
  }

}
