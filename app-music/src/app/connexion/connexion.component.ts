import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { AuthService } from './../services/auth.service';

@Component({
  selector: 'app-connexion',
  templateUrl: './connexion.component.html',
  styleUrls: ['./connexion.component.scss']
})
export class ConnexionComponent implements OnInit {
  
  isValid : boolean = true ;
  constructor( private _route : Router , private _auth : AuthService ) { }
  ngOnInit(): void {
  }
  onSubmit(f){
    // console.log(f.value);
    // this._route.navigate(["/admin"]);
    let reponse = this._auth.login(f.value);
    console.log(reponse);
    // ajouter un message pour l'internaute et vider le formulaire
    if( reponse === false ){
      this.isValid = false;
      f.reset() ; // permet de vider tous les champs du formulaire 
      setTimeout( () => {
        this.isValid = true;
      } , 2000)
    }
  }

}
