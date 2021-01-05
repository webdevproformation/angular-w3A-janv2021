import { Component, OnInit } from '@angular/core';
import { ActivatedRoute , Router } from "@angular/router";
import { MusicService } from "../../../services/music.service"

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.scss']
})
export class UpdateComponent implements OnInit {
  album ;
  constructor( 
      private _activeRoute : ActivatedRoute , 
      private _music : MusicService ,
      private _route : Router ) { }
  ngOnInit(): void {
    this._activeRoute.paramMap.subscribe( ( reponse ) => {
      this.album = this._music.find( reponse.get("id") )
    })
  }
  onSubmit(f){
    // console.log(f.value);
    // pour le champ tags si vous êtes amené à le modifier 
    // il se transforme en chaine de caractère => string 
    // il faut le transformer en tableau de chaine de caractères 
    if(typeof(f.value.tags ) === "string" ){
      f.value.tags = f.value.tags.split(",")
    }
    console.log(f.value.tags);
    this._music.update( f.value );
    this._route.navigate(["/admin"]);
  }
}
