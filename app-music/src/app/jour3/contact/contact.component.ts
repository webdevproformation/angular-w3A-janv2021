import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {
  email:string;
  service : string;
  commentaire : string
  constructor() { }

  ngOnInit(): void {
  }

  onChangeEmail(email){
    console.log(email)
  }
  onSubmitContact($event) :void{
    $event.preventDefault();
    console.log( 
      this.email,
      this.service,
      this.commentaire
    )
  }

  onSubmitFormulaire(f){
   /*  console.log(f); */
    console.log(f.value); // contient l'ensemble des informations saisis dans le formulaire
    // appeler un service => stocker les informations en base de données
    // appeler un service qui va se charger d'envoyer un email 
    f.reset(); // vider tous les champs
  }
}
