import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'searchTeam'
})
export class SearchTeamPipe implements PipeTransform {

  transform(teams: any, search: any): any {
    if(search == undefined) return teams;
    else return teams.filter(team=>{
        return team.name.toLowerCase().includes(search.toLowerCase());
      })
  }

}

