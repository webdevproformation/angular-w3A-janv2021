import { Component, OnInit } from '@angular/core';
import {  ActivatedRoute , Router } from "@angular/router";
import { DataService } from './../data.service';

export interface ArticleInterface{
  titre : string, 
  contenu : string ,
  auteur : string , 
  dtPublication : Date , 
  commentaire :Array<string|null>
}

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.scss']
})
export class ArticleComponent implements OnInit {

  data : ArticleInterface|null ;
  url :string ;
  article : any ;

  constructor( 
        private router :Router , 
        private activeRoute : ActivatedRoute,
        private articleData : DataService
  ) { }

  ngOnInit(): void {
  
    this.activeRoute.paramMap
    .subscribe( ( params ) => {
      this.url = params.get("id") ;
      this.article = this.articleData.find(this.url);
      
      if(this.article != undefined){
        this.data = {
          titre : this.article.company,
          contenu : this.article.about,
          auteur : this.article.email,
          dtPublication : new Date(),
          commentaire : [ ]
        }
      } else {
        // si l'article n'existe pas => redirection vers le composant not-found 
        this.router.navigate(["/not-found"]);
      }
     
    } )
  }

  addCommentaire($event ){
    // console.log("je suis dans le composant article")
    //console.log($event)
    this.data.commentaire.push($event);
    //console.log(this.data);
  }

}
