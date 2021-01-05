import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { MusicService } from "../services/music.service";
import { Album } from "../services/album";

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {
  albums : Array<Album>;
  constructor( private _activeRoute : ActivatedRoute , private _music : MusicService  ) { }
  ngOnInit(): void {
    // observable : this._activeRoute.paramMap
    // il faut s'abonner à l'observable via la méthode .subscribe( callback )
    this._activeRoute.paramMap.subscribe( ( reponse ) => { 
      let motRecherche = reponse.get("key");
      //console.log(motRecherche);
      let resultat = this._music.search( motRecherche ); // [] // [{},{}]
      //console.log( resultat );
      this.albums = resultat ;
    } );
  }

}
