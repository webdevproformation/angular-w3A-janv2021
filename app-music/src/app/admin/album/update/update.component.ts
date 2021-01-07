import { Component, OnInit } from '@angular/core';
import { ActivatedRoute , Router } from "@angular/router";
import { MusicService } from "../../../services/music.service"
import { FirebaseService } from "../../../services/firebase.service"

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.scss']
})
export class UpdateComponent implements OnInit {
  album ;
  constructor( 
      private _activeRoute : ActivatedRoute , 
      private _music : MusicService ,
      private _route : Router ,
      private _firebasemusic : FirebaseService ) { }
      private key ;
  ngOnInit(): void {
    this._activeRoute.paramMap.subscribe( ( reponse ) => {
      this.key = reponse.get("id") ;
      this._firebasemusic.getOne( this.key ).subscribe( response => {
        this.album = response ;
      } )
    })
  }
  onSubmit(f){
    // console.log(f.value);
    // pour le champ tags si vous êtes amené à le modifier 
    // il se transforme en chaine de caractère => string 
    // il faut le transformer en tableau de chaine de caractères 
    if(typeof(f.value.tags ) === "string" ){
      f.value.tags = f.value.tags.split(",")
    }
    console.log(f.value.tags);
    // this._music.update( f.value );
    this._firebasemusic.update( this.key , f.value  );
    
    this._route.navigate(["/admin"]);
  }
}
