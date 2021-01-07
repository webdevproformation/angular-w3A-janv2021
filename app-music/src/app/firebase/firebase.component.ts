import { Component, OnInit  } from '@angular/core';
// récupérer tous les enregistrements qui sont stockées dans la balise de données online
import { AngularFireDatabase } from "@angular/fire/database";
import { Subscription , Observable } from "rxjs";
import { map } from "rxjs/operators";
import { FirebaseService }  from "../services/firebase.service" ;

@Component({
  selector: 'app-firebase',
  templateUrl: './firebase.component.html',
  styleUrls: ['./firebase.component.scss']
})
export class FirebaseComponent implements OnInit   {

  albums ;
  album1 = [];
  albumsSouscription :Subscription ;
  album1Souscription :Subscription;
  albums$ : Observable<Array<any>> ;
  albums2$ : Observable<Array<any>> ;

  constructor( private _firebase : FirebaseService ) { }

  ngOnInit(): void {
    this.albums$ = this._firebase.getAll()
    this._firebase.getAll().subscribe( reponse => {
      this.albums = reponse;
    })
    this._firebase.getOne(1).subscribe( reponse => {
      this.album1 = reponse ;
    })
    this.albums2$ = this._firebase.getAll()
  }

  onKeyDownAdd(name : HTMLInputElement){
    this._firebase.create( { name  : name.value } )
    name.value = "";
  }

  onClickDelete(album){
    console.log(album);
    if(album.key){
      this._firebase.delete(album.key)
    }
  }

  onClickUpdate(album){
    if(album.key){
      this._firebase.update( album.key,  { name : album.name + " mis à jour avec update"}  )
    }
  }

  onClickSet(album){
    if(album.key){
      this._firebase.set(album.key, { name : album.name + " mis à jour avec set"}  )
      // remplacer l'intégralité de l'enregistrement concerné par la valeur que vous envoyez 
    }
  }
}
