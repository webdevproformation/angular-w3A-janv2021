import { Component } from '@angular/core';
import { FormGroup , FormControl , Validators } from "@angular/forms";

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.scss']
})
export class ReactiveFormComponent {
  // FormGroup => form / groupe dans un formulaire
  // FormControl => item input / textarea dans notre formulaire 
  form = new FormGroup( { 
    nom : new FormControl("" , Validators.required ),
    email : new FormControl( "", [ Validators.email , Validators.required ] ) ,
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
  // créer des Validation personnalisée => ne veux pas qu'il y ait le symbole espace 
  // validation async créer un compte => pseudo => (le pseudo que tu veux utiliser est réjà pris)
  // erreur après la validation
  // ... 

  onSubmit(){
    if(this.form.valid){
      console.log( this.form.value );
    }
  }
}
