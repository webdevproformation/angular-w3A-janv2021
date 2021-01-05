import { Component, OnInit , EventEmitter , Output, Input, OnChanges } from '@angular/core';

@Component({
  selector: 'app-commentaire',
  templateUrl: './commentaire.component.html',
  styleUrls: ['./commentaire.component.scss']
})
export class CommentaireComponent implements OnInit {

  @Output() addComment = new EventEmitter()
  @Input() commentaires : Array<{nom :string , commentaire:string}> 
  constructor() { }

  ngOnInit(): void {
    //this.commentaires = [] ;
  }

  ngOnChanges() : void {
    // méthode permet de lancer la mise à jour de l'input 
    // pause dans 15 min 11h07 
    // https://www.freecodecamp.org/news/angular-lifecycle-hooks/
  }

  onSubmitCommentaire( $event , nom , commentaire ){
    $event.preventDefault(); // éviter le rechargemement de page 

    if(nom.value.length > 0 && commentaire.value.length >0){
      
      this.addComment.emit({
        nom : nom.value ,
        commentaire : commentaire.value
      })
      nom.value = "";
      commentaire.value= "";
    }
  }
}
