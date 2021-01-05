import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-onglet',
  templateUrl: './onglet.component.html',
  styleUrls: ['./onglet.component.scss']
})
export class OngletComponent implements OnInit {
  listeOnglet: Array<boolean> = [
    false,
    true,
    true
  ];

  constructor() { }

  ngOnInit(): void {
  }

  onClickOnglet($event){
    let index = $event.target.dataset.index;
    this.listeOnglet.fill(true); // masquer toutes les div
    this.listeOnglet[index] = false ;
  }
}
