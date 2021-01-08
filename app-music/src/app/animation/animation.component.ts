import { Component, OnInit } from '@angular/core';
import { apparitionDisparition , animation1 , bounceInAnimation , animationComplexe  } from "../animations" ;
import { trigger , style , animate , transition , keyframes  } from "@angular/animations";

@Component({
  selector: 'app-animation',
  templateUrl: './animation.component.html',
  styleUrls: ['./animation.component.scss'],
  animations : [ 
    trigger("titre",[ 
      transition(":enter", [
        style({opacity : 0 , transform:"translateX(200px)"}),
        animate(1000)
      ])
    ]),
    trigger("p",[
      transition(":enter", [
        style({opacity : 0 , transform:"translateY(200px)"}),
        animate("1000ms 1000ms")
      ])
    ]),
    trigger("animationP", [
      transition(":enter" , [
        style({opacity : 0 , transform : "translateX(-200px)"}),
        animate( 2000 )
      ]),
      transition(":leave", [
        animate( 2000 , style({opacity : 0 , transform : "translateX(-200px)"}))
      ])
    ]),
    animationComplexe
    ,
    trigger("BounceIn", [ 
      transition("void => *" , [ 
        bounceInAnimation
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
  show: boolean = true;
  texte : string = "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laboriosam maiores eos commodi sunt at quos ex repudiandae inventore, atque expedita.";

  onClickPRemove(){
    this.show = false ;
  }
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
