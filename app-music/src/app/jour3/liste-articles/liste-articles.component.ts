import { Component, OnInit } from '@angular/core';

import { DataService } from './../data.service';

@Component({
  selector: 'app-liste-articles',
  templateUrl: './liste-articles.component.html',
  styleUrls: ['./liste-articles.component.scss']
})
export class ListeArticlesComponent implements OnInit {
  articles : Array<any>
  constructor( private data : DataService) { }

  ngOnInit(): void {
    this.articles = this.data.getAll();
  }

}
