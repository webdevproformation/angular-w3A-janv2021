import { trigger , transition , style , animate } from "@angular/animations";

export let apparitionDisparition = trigger ( "apparitionDisparition" , [ 
    transition( "void => *" , [ 
      style({opacity : 0 , transform : "translateX(-200px)"}),
      animate(2000 , style({ opacity : 1 , transform : "translateX(0px)"}) )
    ] ),
    transition( "* => void" , [
      style({opacity : 1 }),
      animate ( 2000 , style( { opacity : 0 , transform : "translateX(-50px)" }))
    ] )
  ] ); 

export let animation1 = trigger ("animation1", [ 
    transition( "void => *" , [ 
      style( { color : "blue" , fontSize : "10px" } ),
      animate( 5000 , style( { color : "red" , fontSize : "50px"  } ) )
    ] )
  ])