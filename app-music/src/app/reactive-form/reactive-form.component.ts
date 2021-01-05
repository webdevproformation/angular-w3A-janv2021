import { Component } from '@angular/core';
import { FormGroup , FormControl , Validators } from "@angular/forms";
import { ValidatorPersonnalise } from "./validator-personnalise";

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.scss']
})
export class ReactiveFormComponent {
  // FormGroup => form / groupe dans un formulaire
  // FormControl => item input / textarea dans notre formulaire 
  form = new FormGroup( { 
    nom : new FormControl(
            "" , 
            [ 
              Validators.required , 
              ValidatorPersonnalise.pasDEspace
            ]  
        ),
    email : new FormControl( "", 
                          [ Validators.email , Validators.required ] ,
                          ValidatorPersonnalise.uniqueEmail ) ,
    adresse : new FormControl("", ValidatorPersonnalise.isValidAdresse ),
    commentaire : new FormControl(
                      "texte par défaut" , 
                        [ 
                          Validators.required , 
                          Validators.minLength(2),
                          Validators.maxLength(30)
                        ]
                      )
  } );

  // test : string = "valeur par défaut pour le champ test"

  // ajouter un getter // éviter d'avoir à répéter form.get("email") dans la partie html 
  get email(){
    return this.form.get("email");
  }

  get adresse(){
    return this.form.get("adresse");
  }
  // créer des Validation personnalisée => ne veux pas qu'il y ait le symbole espace 
  // validation async créer un compte => pseudo => (le pseudo que tu veux utiliser est réjà pris)
  // erreur après la validation
  // ... 

  onSubmit(){
    
    this.form.setErrors({
      message : "les valeurs saisies sont incorrectes" 
    });

    if(this.form.valid){
      console.log( this.form.value );
    }
  }
}

// 14h05 !! 
// bon appétit tout le monde !! 
