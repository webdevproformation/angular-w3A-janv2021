import { Component, OnInit } from '@angular/core';
import { FormBuilder , Validators , FormControl , FormArray } from "@angular/forms"

@Component({
  selector: 'app-form-profil',
  templateUrl: './form-profil.component.html',
  styleUrls: ['./form-profil.component.scss']
})
export class FormProfilComponent implements OnInit {
  form 
  constructor( private _formBuild : FormBuilder) { }
  ngOnInit(): void {
    this.form = this._formBuild.group({
      nom : ["", [  Validators.required , Validators.minLength(3) , Validators.maxLength(20)] ],
      age : ["" , [ Validators.required  , Validators.min(0) , Validators.max(120)]],
      passions : this._formBuild.array([])
    })
  }
  // getter => faciliter la vie pour utiliser les différents champs du formulaire 
  get nom():FormControl{
    return this.form.get("nom")
  }
  get age():FormControl{
    return this.form.get("age")
  }
  get passions():FormArray{
    return this.form.get("passions")
  }

  onClickAdd(){
    // lorsque je clique sur le bouton => ajouter un nouvel champ dans le passions => tableau 
    // .push
    this.passions.push( new FormControl(
                                  "", 
                                  [Validators.required , Validators.minLength(3) , Validators.maxLength(20)] 
                                  )
                       );
  }

  onSubmit(){
    console.log(this.form.valid)
    if(this.form.valid){
      console.log(this.form.value);
    }
  }
}
