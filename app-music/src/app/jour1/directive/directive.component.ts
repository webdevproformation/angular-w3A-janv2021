import { Component, OnInit } from '@angular/core';
import { DataService , Client } from '../services/data.service';

@Component({
  selector: 'app-directive',
  templateUrl: './directive.component.html',
  styleUrls: ['./directive.component.scss']
})
export class DirectiveComponent implements OnInit {

  liste: Array<string> = ["lundi", "mardi", "mercredi"] ;

  formation : Array<{id:number , matiere:string }> = [
    { 
        id : 1 ,
        matiere : "javascript"
    },
    {
        id : 2 ,
        matiere : "Angular"
    }
  ];
  client : Array<Client>;
  
  constructor() { 
    let d  = new DataService();
    this.client = d.getData();
  }

  ngOnInit(): void {
  }

}
