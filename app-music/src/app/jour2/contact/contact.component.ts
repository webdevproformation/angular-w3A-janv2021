import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  email : string = "toto@yahoo.fr";
  commentaire: string = "";
  constructor() { }

  ngOnInit(): void {
  }

  onClickShowEmail():void{
    console.log(this.email , this.commentaire)
  }

}
