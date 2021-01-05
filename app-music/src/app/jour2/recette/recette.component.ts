import { Component, OnInit } from '@angular/core';

import { registerLocaleData } from '@angular/common';
import localeFr from '@angular/common/locales/fr';
registerLocaleData(localeFr, 'fr');

@Component({
  selector: 'app-recette',
  templateUrl: './recette.component.html',
  styleUrls: ['./recette.component.scss']
})
export class RecetteComponent implements OnInit {

  dtPublication : Date = new Date();
  titre : string = "Fondant au chocolat";
  description : string = `lorem ipsum   
                          saut de ligne 
                          encore unsaut de ligne `;
  prix : number = 1423.542;
  // google unsplash random
  img : string = "https://source.unsplash.com/random/500x400";
  auteur : string = "alain dupont"

  meta : { auteur:string , date: Date , like:number } = {
    auteur : "Victor hugo",
    date : new Date(),
    like : 0
};

  constructor() { }

  ngOnInit(): void {
  }

}
