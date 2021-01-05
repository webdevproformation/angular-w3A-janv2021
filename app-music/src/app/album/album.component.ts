import { Component, OnInit } from '@angular/core';
import { ActivatedRoute , Router  } from "@angular/router";
import { MusicService } from "../services/music.service";
import { Album } from './../services/album';
@Component({
  selector: 'app-album',
  templateUrl: './album.component.html',
  styleUrls: ['./album.component.scss']
})
export class AlbumComponent implements OnInit {
  album : Album;
  constructor( 
      private _activeRoute : ActivatedRoute , 
      private _music : MusicService ,
      private _route : Router ) { }
  ngOnInit(): void {
    this._activeRoute.paramMap.subscribe( ( reponse )=> {
      //console.log( reponse.get("id"));
      let album = this._music.find( reponse.get("id")  );
      //console.log(album);
      if( album === undefined ){
        this._route.navigate( ["/not-found"] ); // app.module.ts appeler une route qui n'existe pas 
      } else {
        this.album = album;
      }
    } )
  }

}
