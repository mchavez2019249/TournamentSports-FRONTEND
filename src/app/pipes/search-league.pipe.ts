import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'searchLeague'
})
export class SearchLeaguePipe implements PipeTransform {

  transform(leagues: any, search: any): any {
    if(search == undefined) return leagues;
    else return leagues.filter(league=>{
        return league.name.toLowerCase().includes(search.toLowerCase());
      })
  }

}
