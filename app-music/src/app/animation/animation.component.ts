import { Component, OnInit } from '@angular/core';
import { apparitionDisparition , animation1 } from "../animations" ;
import { trigger , style , animate , transition , keyframes } from "@angular/animations";

@Component({
  selector: 'app-animation',
  templateUrl: './animation.component.html',
  styleUrls: ['./animation.component.scss'],
  animations : [ 
    trigger( "animationComplexe", [
      transition("void => *", [
        animate( 5000 , keyframes([
          style({ offset : 0.2 , width : "300px" }),
          style({ offset : 0.5 , width : "10px" }),
          style({ offset : 1 , width : "200px" }),
          // https://animate.style/
          // https://github.com/animate-css/animate.css
        ]))
      ])
    ] ),
    trigger("BounceIn", [ 
      transition("void => *" , [ 
        animate( "2000ms 0s cubic-bezier(0.215, 0.61, 0.355, 1)" , keyframes([ 
            style({ offset : 0  , opacity: 0 , transform: "scale3d(0.3, 0.3, 0.3)" }),
            style({ offset : 0.2  , transform: "scale3d(1.1, 1.1, 1.1)" }),
            style({ offset : 0.4  , transform: "scale3d(0.9, 0.9, 0.9)" }),
            style({ offset : 0.6  , opacity: 1 , transform: "scale3d(1.03, 1.03, 1.03)" }),
            style({ offset : 0.8  , transform: "scale3d(0.97, 0.97, 0.97)" }),
            style({ offset : 1  , transform: "scale3d(1, 1, 1)"  , opacity: 1}),
        ]))
      ])
    ]),
    animation1 ,
    apparitionDisparition
  ]
})
export class AnimationComponent implements OnInit {
  liste : Array<string> = [] ;
  jours : Array<string | number> = [] ;
  i : number = 0;
  constructor() { }
  ngOnInit(): void {
  }
  onKeyupEnter(info : HTMLInputElement){
    this.liste.push( info.value );
    info.value = "";
  }
  onClick(l){
    let elementAsupprimer = this.liste.find( function(item) {
      return item === l ;
    } );
    let index = this.liste.indexOf(elementAsupprimer);
    if(index !== -1){
      this.liste.splice(index , 1);
    }
  }// rdv 11h16 bon café tout le monde !!!!!!!!!!!!!!! 

  onClickLoadData(){
    // si je clique 1 fois => afficher les jours de la semaine 
    // si je reclique => regénérer telquel 
    // quand on appelle une liste depuis internet 
    // les données n'ont pas changés MAIS Angular va regénérer les li dans le DOM 
    // demander à Angular de garder en mémoire la liste des li 
    // il va faire une comparaison
    this.jours = ["lundi" , "mardi" , "mercredi" , this.i];
    this.i++;
  }

  jourVerif(index , item){ // bien respecter le nom du deuxième paramètre
    return item ? item : undefined;
  }

}
