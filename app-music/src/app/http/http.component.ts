import { Component, OnInit } from '@angular/core';
import { HttpClient } from "@angular/common/http" ;
import { map } from "rxjs/operators";
import { Observable } from 'rxjs';

@Component({
  selector: 'app-http',
  templateUrl: './http.component.html',
  styleUrls: ['./http.component.scss']
})
export class HttpComponent implements OnInit {

  url : string = "https://jsonplaceholder.typicode.com/posts"
  articles$ : Observable<Array<{}>>

  constructor( private _http : HttpClient) { }

  ngOnInit(): void { 
    this.articles$ = this._http.get( this.url ).pipe(
      map( function( reponse : any ){ 
        return reponse.map( function(item){ 
          return {
            id : item.id ,
            title : item.title ,
            body : item.body
          }
        } )
      } ),
      map( function(reponse){ 
        return reponse.filter( function( item ){
          return item.id <= 10
        })
       })
    )
  }

}
