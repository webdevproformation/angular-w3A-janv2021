import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'heureminute'
})
export class HeureminutePipe implements PipeTransform {

  transform(duree: number): string {
    // 210 min => 60 = 3.5
    // 3h 
    // 210 - 3 * 60 = 210 - 180 = 30min 
    let nbHeure = Math.floor(duree / 60);
    let nbMin :any = duree % 60;  
    
    if(nbMin <=9){
      nbMin = "0" + nbMin ;
    }
    return `${nbHeure}h${nbMin}min`;
    //  return new Date(1970, 0, 1).setSeconds(duree);
  }

}
