import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-animation',
  templateUrl: './animation.component.html',
  styleUrls: ['./animation.component.scss']
})
export class AnimationComponent implements OnInit {
  liste : Array<string> = [] ;

  constructor() { }

  ngOnInit(): void {
  }

  onKeyupEnter(info : HTMLInputElement){
    this.liste.push( info.value );
    info.value = "";
  }

}
