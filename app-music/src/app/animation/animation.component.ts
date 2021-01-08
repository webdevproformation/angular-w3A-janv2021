import { Component, OnInit } from '@angular/core';
import { trigger , transition , style , animate } from "@angular/animations";

@Component({
  selector: 'app-animation',
  templateUrl: './animation.component.html',
  styleUrls: ['./animation.component.scss'],
  animations : [  
    trigger ("animation1", [ 
      transition( "void => *" , [ 
        style( { color : "blue" , fontSize : "10px" } ),
        animate( 5000 , style( { color : "red" , fontSize : "50px"  } ) )
      ] )
    ]),
    trigger ( "apparitionDisparition" , [ 
      transition( "void => *" , [ 
        style({opacity : 0 , transform : "translateX(-200px)"}),
        animate(2000 , style({ opacity : 1 , transform : "translateX(0px)"}) )
      ] ),
      transition( "* => void" , [
        style({opacity : 1 }),
        animate ( 2000 , style( { opacity : 0 , transform : "translateX(-50px)" }))
      ] )
    ] )
  ]
})
export class AnimationComponent implements OnInit {
  liste : Array<string> = [] ;

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

}
