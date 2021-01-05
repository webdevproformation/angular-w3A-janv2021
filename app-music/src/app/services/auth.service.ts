import { Injectable } from '@angular/core';
import { Router } from "@angular/router";

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private _route : Router ) { }
  // temporairement (objet) => en ligne sur une base de données 
  user = {
    login : "login",
    password : "azerty",
    pseudo : "Alain Dupont",
    role : "admin"
  }

  // permet de vérifier que les informations de connexion
  // sont conformes avec un profil
  // si les informations sont conformes 
  // ajouter un enregistrement dans localStorage
  // $_SESSION (variable que l'on va stocker en permance tout au long de la navigation de l'internaute)
  // redirection avec la page d'accueil de back office 
  // sinon non les informations sont fausses
  // credentials => identifiants (de connexion )
  login( credentials : { login : string , password : string } ) : boolean{
    if( credentials.login === this.user.login && credentials.password === this.user.password ){
      // ajouter une information dans le localStorage du navigateur 
      localStorage.setItem("token" , JSON.stringify(this.user));
      // rediriger l'internaute vers la page d'accueil du back office 
      this._route.navigate(["/admin"]);
      return true ; 
    }else{
      // si les identifiants ne sont pas correctes
      return false ;
    }
  }

  logout():void{
    // vider le localstorage
    localStorage.removeItem("token");
    // redirection la page de connexion du site 
    this._route.navigate(["/connexion"]);
  }

  // méthode que l'on va utiliser dans les composants 
  // permettre de vérifier si la personne s'est bien connecté
  // permettre de vérifier le droits de l'utilisateur (?? admin ??? )
  isLogged() : boolean{
    let token = localStorage.getItem("token");
    if(token === null ){
      return false ;
    } else {
      if(JSON.parse(token).role === "admin"){
        return true ; // connecté ET Admin pour accéder au back office du site 
      }
      return false ;
    }
  }

  // JSON WEB TOKEN (crypter // vérifier que la personne)
}
