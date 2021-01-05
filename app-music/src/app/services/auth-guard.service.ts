import { Injectable } from '@angular/core';
import { CanActivate , Router } from "@angular/router";
import { AuthService } from "./auth.service";


@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements CanActivate {

  constructor( private _auth : AuthService , private _route : Router) { }

  canActivate(route){
    if(this._auth.isLogged()){
      return true;
    } else {
      this._route.navigate(["/forbidden"]);
      // redirection vers une page qui va lui dire vous n'avez pas les droits 
      return false ;
    }
  }
}
// app.module.ts 
// créer le composant forbidden
