import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }
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
  login(){}

  // vider le localstorage
  // redirection la page de connexion du site 
  logout(){}

  // méthode que l'on va utiliser dans les composants 
  // permettre de vérifier si la personne s'est bien connecté
  // permettre de vérifier le droits de l'utilisateur (?? admin ??? )
  isLogged(){}

  // JSON WEB TOKEN (crypter // vérifier que la personne)
}
