import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-exo',
  templateUrl: './exo.component.html',
  styleUrls: ['./exo.component.scss']
})
export class ExoComponent implements OnInit {
  message : string ;
  isValidEmail: boolean = false;
  messagePays: string ;
  constructor() { }

  ngOnInit(): void {
  }

  onModifEmail($event){
    let valeurSaisie = $event.target.value;
    console.log(valeurSaisie);
    if(valeurSaisie.length <= 4 ){
      this.message = "veuillez finir de compléter le champ email";
    }else{
      this.message = "";
    }
    let patternEmail = /^[a-zA-Z0-9_\.\-]{1,}@[a-zA-Z0-9_\-]{1,}\.[a-z]{2,10}$/;

    if( patternEmail.test(valeurSaisie) ){
      this.message = "email conforme";
      this.isValidEmail = true;
    }else {
      this.isValidEmail = false;
    }

  }

  onModifSelect($event){
    //console.log();
    let paysSelectionne = $event.target.value
    if(paysSelectionne != ""){
      this.messagePays = paysSelectionne
    }else{
      this.messagePays = "";
    }
    
  }

}
