import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-meta',
  templateUrl: './meta.component.html',
  styleUrls: ['./meta.component.scss']
})
export class MetaComponent implements OnInit {
  @Input() auteur: string;
  @Input() dt : Date;

  constructor() { }

  ngOnInit(): void {
  }

}
