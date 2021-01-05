import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";

@Component({
  selector: 'app-search-form',
  templateUrl: './search-form.component.html',
  styleUrls: ['./search-form.component.scss']
})
export class SearchFormComponent implements OnInit {
 
  constructor( private _route : Router ) { }

  ngOnInit(): void {
  }

  onSubmit(f){
    // suite au clique => redirigé vers l'adresse suivante 
    // http://localhost:4200/search/album
    // redirection depuis le fichier .ts 
    this._route.navigate([ "/search" , f.value.search ]);
    // console.log(f.value);
  }

}
