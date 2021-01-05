import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'directive',
  templateUrl: './directive.component.html',
  styleUrls: ['./directive.component.scss']
})
export class DirectiveComponent implements OnInit {

  liste : Array<number> = [1, 2, 3];
  isBase : boolean = true;
  isError : boolean = false ;
  isReussi : boolean = false ;
  isSmall : boolean = false ;

  constructor() { }

  ngOnInit(): void {
  }

  addData(){
    return this.liste= [4,5,6,7];
  }

  postCheck(index , a){
   /*  console.log(index, a);
    if( a ){
      return a;
    }else{
      return null;
    } */
  } // éviter de rechercher intégralement un élément dans 
  // d'abord vérifier si les éléments sont déjà présents dans la liste 
  // performance 

}
