import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-boutons',
  template: `
    <div>
      <button [innerHTML]="btn1.texte" [style]="btn1.style"></button>
      <button [style]="btn2.style">{{ btn2.texte }}</button>
    </div>
  `,
  styleUrls: ['./boutons.component.scss']
})
export class BoutonsComponent implements OnInit {
  btn1 : {texte : string , style: {}} = {
    texte : "valider",
    style : {
      background : "blue",
      borderRadius : "5px",
      padding : "3px 15px",
      border: "none",
      color : "white",
      marginRight : "5px"
    }
  };

  btn2 : {texte : string , style: {}} = {
    texte : "reset",
    style : {
      background : "orange",
      borderRadius : "5px",
      padding : "10px 25px",
      border: "none",
      color : "white"
    }
  };

  constructor() { }

  ngOnInit(): void {
  }

}
