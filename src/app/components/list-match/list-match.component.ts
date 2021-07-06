import { Component, OnInit } from '@angular/core';
import { RestMatchService } from 'src/app/services/restMatch/rest-match.service';

@Component({
  selector: 'app-list-match',
  templateUrl: './list-match.component.html',
  styleUrls: ['./list-match.component.css']
})
export class ListMatchComponent implements OnInit {
  teams:[];
  search;

  constructor(private restMatch: RestMatchService) { }

  ngOnInit(): void {
  }

  listMatch(){
    this.restMatch.getMatches().subscribe((res:any)=>{
      if(res.teams){
        this.teams = res.teams;
        console.log(this.teams)
      }else{
        alert(res.message)
      }
    }, error=> alert(error.error.message));
  }

}
