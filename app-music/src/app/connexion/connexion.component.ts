import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";

@Component({
  selector: 'app-connexion',
  templateUrl: './connexion.component.html',
  styleUrls: ['./connexion.component.scss']
})
export class ConnexionComponent implements OnInit {

  constructor( private _route : Router ) { }

  ngOnInit(): void {
  }

  onSubmit(f){
    console.log(f.value);
    this._route.navigate(["/admin"]);
  }

}
