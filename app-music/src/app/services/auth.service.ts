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
  login( credentials ){
    if( credentials.login === this.user.login && credentials.password === this.user.password ){
      // ajouter une information dans le localStorage du navigateur 
      localStorage.setItem("token" , JSON.stringify(this.user));
      // rediriger l'internaute vers la page d'accueil du back office 
      this._route.navigate(["/admin"]);
    }else{
      // si les identifiants ne sont pas correctes
      return false ;
    }
  }

  // vider le localstorage
  // redirection la page de connexion du site 
  logout(){}

  // méthode que l'on va utiliser dans les composants 
  // permettre de vérifier si la personne s'est bien connecté
  // permettre de vérifier le droits de l'utilisateur (?? admin ??? )
  isLogged(){}

  // JSON WEB TOKEN (crypter // vérifier que la personne)
}
