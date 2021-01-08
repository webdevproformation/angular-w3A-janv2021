import { Component, OnInit } from '@angular/core';
import { HttpClient } from "@angular/common/http" ;
import { map } from "rxjs/operators";
import { Observable , merge } from 'rxjs';
import { FormBuilder } from "@angular/forms"

@Component({
  selector: 'app-http',
  templateUrl: './http.component.html',
  styleUrls: ['./http.component.scss']
})
export class HttpComponent implements OnInit {
  form 
  url : string = "https://jsonplaceholder.typicode.com/posts"
  articles : any;

  constructor( private _http : HttpClient , private _formBuild : FormBuilder) { }

  ngOnInit(): void { 
    this.form = this._formBuild.group({
      title : ["titre par défaut"],
      body : ["contenu par défaut"]
    })
    this._http.get( this.url ).pipe(
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
    ).subscribe( reponse => {
      this.articles = reponse
    })
  }

  onSubmitAdd(){
    console.log(this.form.value)
    this._http.post(this.url ,this.form.value).subscribe( reponse  => {
      this.articles.unshift( reponse )
    })
    // vider le formulaire 
    //this.form.reset();
  }

  onClickDelete(article){
    this._http.delete(this.url +"/"+ article.id ).subscribe( reponse => {
      if(reponse){
        let articleAsupprimer = this.articles.find( function(item){
          return item.id === article.id
        });
        let index = this.articles.indexOf(articleAsupprimer);
        if(index !== -1){
          this.articles.splice(index, 1)
        }
      }
    })
  }

}
