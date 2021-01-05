import { Component, OnInit } from '@angular/core';

import { DataService } from './../data.service';

@Component({
  selector: 'app-accueil',
  templateUrl: './accueil.component.html',
  styleUrls: ['./accueil.component.scss']
})
export class AccueilComponent implements OnInit {
  articles: any ;
  constructor( private dataService : DataService) { }

  ngOnInit(): void {
    this.articles = this.dataService.getLast(3)
  }

}
