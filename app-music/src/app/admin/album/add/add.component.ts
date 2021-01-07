import { Component, OnInit } from '@angular/core';
import { FirebaseService } from "../../../services/firebase.service";
import { Router } from "@angular/router";

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.scss']
})
export class AddComponent implements OnInit {

  constructor( 
      private _route : Router ,
      private _firebasemusic : FirebaseService ) { }

  ngOnInit(): void {
  }

  onSubmit(f){
   /*  console.log(f.value); */
    // attribuer des valeurs par défaut aux différents champs du formulaire 

    let album = { 
      id : `${new Date().getTime()}-${(Math.random()*100).toFixed(0)}`,
      ref: f.value.ref || "Rock", 
      name: f.value.name || "album 1", 
      title: f.value.title || "titre 1", 
      description: f.value.description || "lorem ipsum", 
      duration: f.value.duration || 200 , 
      status:  f.value.status || "on", 
      url: f.value.url || "https://google.fr", 
      tags: f.value.tags || [ "tag1", "tag2" ], 
      like: f.value.like || "Mush" 
    }
    this._firebasemusic.create( album );
    this._route.navigate(["/admin"]);
  }
}
