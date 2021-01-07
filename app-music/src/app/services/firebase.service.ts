import { Injectable } from '@angular/core';
import { AngularFireDatabase } from "@angular/fire/database";
import { map } from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class FirebaseService {

  data = this._db.list("/albums") ;

  constructor( private _db : AngularFireDatabase) { }

  getAll<T>(){
    return this.data.snapshotChanges()
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
  }

  getFirst(){
    return this.getAll().pipe(
      map( function( reponse ){
          if(reponse[0]){
            return reponse[0];
          }else {
            return null
          }
      } )
    )
  }

  getOne<T>(key){
    if(key){
      return this._db.object("/albums/" + key).valueChanges();
    }
  }
  delete<T>( key ){
    if(key){
      return this.data.remove( key );
    }
  }
  update<T>( key , objet ){
    if(key){
      return this.data.update( key , objet );
    }
  }

  set( key , objet){
    if(key){
      return this.data.set( key , objet );
    }
  }
  create<T>(objet){ 
    return this.data.push(objet);
  }
}
