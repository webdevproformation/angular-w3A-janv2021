import { trigger , transition , style , animate , animation , keyframes ,state } from "@angular/animations";

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
    state("*", style( { color : "red" , fontSize : "50px"  })),
    transition( "void => *" , [ 
      style( { color : "blue" , fontSize : "10px" } ),
      animate( 5000 , style( { color : "red" , fontSize : "50px"  } ) )
    ] )
  ])

export let bounceInAnimation = animation( animate( "2000ms 0s cubic-bezier(0.215, 0.61, 0.355, 1)" , keyframes([ 
  style({ offset : 0  , opacity: 0 , transform: "scale3d(0.3, 0.3, 0.3)" }),
  style({ offset : 0.2  , transform: "scale3d(1.1, 1.1, 1.1)" }),
  style({ offset : 0.4  , transform: "scale3d(0.9, 0.9, 0.9)" }),
  style({ offset : 0.6  , opacity: 1 , transform: "scale3d(1.03, 1.03, 1.03)" }),
  style({ offset : 0.8  , transform: "scale3d(0.97, 0.97, 0.97)" }),
  style({ offset : 1  , transform: "scale3d(1, 1, 1)"  , opacity: 1}),
])) )

export let animationComplexe = trigger( "animationComplexe", [
  transition("void => *", [
    animate( 5000 , keyframes([
      style({ offset : 0.2 , width : "300px" }),
      style({ offset : 0.5 , width : "10px" }),
      style({ offset : 1 , width : "200px" }),
      // https://animate.style/
      // https://github.com/animate-css/animate.css
    ]))
  ])// 14h04 bon appétit !!!!!!!! rdv dans 1 heure !!! 
] )
