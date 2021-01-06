import { Component, OnInit , OnDestroy } from '@angular/core';
// récupérer tous les enregistrements qui sont stockées dans la balise de données online
import { AngularFireDatabase } from "@angular/fire/database";
import { Subscription } from "rxjs"

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
  albums$ ;

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
  }
}
