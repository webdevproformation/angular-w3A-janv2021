import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-action',
  templateUrl: './action.component.html',
  styleUrls: ['./action.component.scss']
})
export class ActionComponent implements OnInit {
  texte : string;
  constructor() { }

  ngOnInit(): void {
  }

  onSave(){
    this.texte = "je suis cliqué"
    // alert("je suis cliqué");
  }

}
