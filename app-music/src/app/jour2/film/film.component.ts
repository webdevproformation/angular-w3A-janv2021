import { Component, OnInit } from '@angular/core';

import { registerLocaleData } from '@angular/common';
import localeFr from '@angular/common/locales/fr';
registerLocaleData(localeFr, 'fr');

import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-film',
  templateUrl: './film.component.html',
  styleUrls: ['./film.component.scss']
})
export class FilmComponent implements OnInit {

  titre : string = "Un jour sans fin";
  resume  : string =  `Un jour sans fin (en anglais : Groundhog Day), ou Le Jour de la marmotte au Québec et au Nouveau-Brunswick, est une comédie fantastique américaine réalisée par Harold Ramis, écrite par Ramis et Danny Rubin et sortie en 1993.

  Bill Murray y interprète Phil Connors, un cynique et misanthrope présentateur météo chargé de couvrir le traditionnel jour de la marmotte à Punxsutawney, petite ville de Pennsylvanie, et qui se retrouve bloqué dans une boucle temporelle le forçant à revivre indéfiniment ce qu'il estime être la journée la plus ennuyeuse. Andie MacDowell, Chris Elliott, Stephen Tobolowsky et Brian Doyle-Murray interprètent les autres personnages importants. `;

  safeURL :any;
  affiche : string = 'jour-sans-fin.jpg'

  categories : Array<string> = ["comédie" , "science fiction"];
  prix : number = 50.357;

  meta : { auteur:string , date: Date , like:number } = {
      auteur : "Charles Dickens",
      date : new Date(),
      like : 20
  };

  constructor(private _sanitizer: DomSanitizer) {

    this.safeURL = this._sanitizer.bypassSecurityTrustResourceUrl("https://www.youtube.com/embed/vjbAdxpFPXU");
   }

  ngOnInit(): void {
  }

}
