import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-questionnaire',
  templateUrl: './questionnaire.component.html',
  styleUrls: ['./questionnaire.component.scss']
})
export class QuestionnaireComponent implements OnInit {

  email:string= "";
  details: string = ""
  pays : string = "";

  constructor() { }

  ngOnInit(): void {
  }

  onClickQuestionnaire($event){
    $event.preventDefault();
    if(
      this.email.length > 0 &&
      this.details.length > 0 && 
      this.pays.length > 0
    ){
      alert("merci pour votre commentaire");
      this.email = "";
      this.details = "";
      this.pays = "";
    }
  }
}
