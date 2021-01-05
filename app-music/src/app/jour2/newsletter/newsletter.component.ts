import { Message } from '@angular/compiler/src/i18n/i18n_ast';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-newsletter',
  templateUrl: './newsletter.component.html',
  styleUrls: ['./newsletter.component.scss']
})
export class NewsletterComponent implements OnInit {
  show : boolean = false;
  constructor() { }

  ngOnInit(): void {
  }
  onClickForm($event:any , email:HTMLInputElement , message:HTMLElement) :void{
    $event.preventDefault(); // bloquer le rechargement de page

    /*
      [a-zA-Z0-9\-\.]{1,} alain-dufour
      @                    @
      [a-zA-Z0-9\-]{1,}       monsuper-site
      \.                    .
      [a-z]{2,10}             fr
      regex101.com
      :: liste de regex disponible : 
      // https://www.w3schools.com/TAGS/att_input_pattern.asp
    */
    let patternEmail = /^[a-zA-Z0-9\-\._]{1,}@[a-zA-Z0-9\-]{1,}\.[a-z]{2,10}$/ ;
    if(patternEmail.test(email.value)){
      alert("votre email est enregistré en bdd" );
      message.innerHTML = "";
      email.value = ""; // vider le champ input
    }else {
      message.innerHTML = "ce n'est pas non conforme";
      this.show = true;
    }
  }
}
