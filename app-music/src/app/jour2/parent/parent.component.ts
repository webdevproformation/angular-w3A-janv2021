import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.scss']
})
export class ParentComponent implements OnInit {

  titre : string = "Article 1";
  description : string = `
  Lorem, ipsum dolor sit amet consectetur adipisicing elit. Doloremque dolorum corporis est at explicabo, recusandae voluptatem, odio laborum officia nisi consectetur pariatur totam nam error, voluptatum labore repellat! Aspernatur, recusandae?

  Lorem, ipsum dolor sit amet consectetur adipisicing elit. Doloremque dolorum corporis est at explicabo, recusandae voluptatem, odio laborum officia nisi consectetur pariatur totam nam error, voluptatum labore repellat! Aspernatur, recusandae?
  `;

  meta : { auteur:string , date: Date , like:number } = {
    auteur : "Alain Dufour",
    date : new Date(),
    like : 5
  };

  constructor() { }

  ngOnInit(): void {
  }

  changeNbLike(){
    this.meta.like++ ;
  }

  changeNbLikeDiminue(){
    if(this.meta.like > 0){
      this.meta.like-- ;
    }
  }

}


