import { Component, OnInit } from '@angular/core';
import { FormGroup , FormControl , Validators , FormArray , FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-reactive-form-suite',
  templateUrl: './reactive-form-suite.component.html',
  styleUrls: ['./reactive-form-suite.component.scss']
})
export class ReactiveFormSuiteComponent implements OnInit {

  form2 ;
  form3 ;

  constructor( frmBuild : FormBuilder) {
    this.form2 = frmBuild.group({ // new FormGroup({})
      nom : ["valeur par défaut", Validators.required ]  ,   // nom : new FormControl()
      images : frmBuild.array([ 
        ["image 1"],
        ["image 2"],
        frmBuild.control("image 3"),
      ]) //  new FormArray([])
    });

    this.form3 = frmBuild.group({
      email : [],
      origin : [],
      images : frmBuild.array([ [],[],[],[],[] ])
    })
  }

  onSubmit3(){
    console.log(this.form3.value);
  }
  onSubmit2(){
    console.log(this.form2.value);
  }

  /*
    form2 = new FormGroup({
      nom : new FormControl( "valeur par défaut", Validators.required ),
      images : new FormArray([])
    })
  */

  form = new FormGroup({
    categories : new FormArray([]) , // style de champ de formulaire ,
    matieres : new FormArray([])
  });

  onKeyDownAdd(input){
    // console.log(input.value); 
    (this.form.get("categories") as FormArray ).push( new FormControl(input.value) )
    input.value = ""; // vide le champ
  }

  onClickAdd(){
    (this.form.get("matieres") as FormArray ).push( new FormControl() )
  }

  onSubmit(){
    console.log(this.form.value)
  }

  

  ngOnInit(): void {
  }

}
