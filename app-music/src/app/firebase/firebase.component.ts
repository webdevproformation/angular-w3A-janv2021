import { Component, OnInit , OnDestroy } from '@angular/core';
// récupérer tous les enregistrements qui sont stockées dans la balise de données online
import { AngularFireDatabase } from "@angular/fire/database";
import { Subscription , Observable } from "rxjs";
import { map } from "rxjs/operators";

@Component({
  selector: 'app-firebase',
  templateUrl: './firebase.component.html',
  styleUrls: ['./firebase.component.scss']
})
export class FirebaseComponent implements OnInit ,OnDestroy  {

  albums ;
  album1 ;
  albumsSouscription :Subscription ;
  album1Souscription :Subscription;
  albums$ : Observable<Array<any>> ;
  albums2$ : Observable<Array<any>> ;

  constructor( private _db : AngularFireDatabase) { }

  ngOnInit(): void {
    // récupérer TOUT
    this.albumsSouscription = this._db.list("/albums").valueChanges().subscribe( reponse => {
      this.albums = reponse
      // console.log(reponse);
    })
    // récupère 1 seul album
    this.album1Souscription = this._db.list("/albums/1").valueChanges().subscribe( reponse => {
      this.album1 = reponse;
    })
    // stocker la partie Observable 
    this.albums$ = this._db.list("/albums").valueChanges()

    this.albums2$ = this._db.list("/albums").snapshotChanges()
      .pipe( 
        map(  function( reponse ){ 
          return reponse.map( function( item : any ){ 
            return { 
              key : item.key ,
              ...item.payload.val()
            }
           } )
        })
      )
      
    /**
     * [{ id: 1, key : "a" } , { id: 2, key : "b" }]
     * [{ key : "a" } , { key : "b" }]
     * [{ id: 1 } , { id: 2 }]
     * // update et suppression !! rdv dans 15 min 11h19 bon café 
     */
  }

  ngOnDestroy():void{
    // dès que l'on sort de la page => arrêter l'abonnement l'Observable
    // éviter les pertes de mémoire  
    this.albumsSouscription.unsubscribe();
    this.album1Souscription.unsubscribe();
  }

  onKeyDownAdd(name : HTMLInputElement){
    this._db.list("/albums").push({ name : name.value });
    name.value = "";
  }

  onClickDelete(album){
    console.log(album);
    if(album.key){
      this._db.list("/albums").remove(album.key)
    }
  }

  onClickUpdate(album){
    if(album.key){
      this._db.list("/albums").update(album.key, { name : album.name + " mis à jour avec update"}  )
      // met à jour le champ que l'on veut modifier 
    }
  }

  onClickSet(album){
    if(album.key){
      this._db.list("/albums").set(album.key, { name : album.name + " mis à jour avec set"}  )
      // remplacer l'intégralité de l'enregistrement concerné par la valeur que vous envoyez 
    }
  }
}
