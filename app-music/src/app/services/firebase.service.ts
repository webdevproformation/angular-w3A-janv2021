import { Injectable } from '@angular/core';
import { DataService } from "./data.service";
import { AngularFireDatabase } from "@angular/fire/database";

@Injectable({
  providedIn: 'root'
})
export class FirebaseService extends DataService {

  constructor(  _db : AngularFireDatabase  ) {
    super( "albums" , _db  ); // appeler le constructeur du parent et de l'initialiser 
  }

}
