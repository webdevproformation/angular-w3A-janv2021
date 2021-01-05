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

  onSubmit(){
    console.log( this.form.value );
  }
}
