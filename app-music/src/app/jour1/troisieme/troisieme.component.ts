import { Component, OnInit } from '@angular/core';
import { FilmsService , FilmInterface } from './../services/films.service';

@Component({
  selector: 'troisieme',
  templateUrl: './troisieme.component.html',
  styleUrls: ['./troisieme.component.scss']
})
export class TroisiemeComponent implements OnInit {
  films : Array<FilmInterface>
  constructor( serviceFilm : FilmsService ) { 
    this.films = serviceFilm.getFilms();
  }

  ngOnInit(): void {
  }
}
