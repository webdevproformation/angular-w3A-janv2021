import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cinquieme',
  template: `
          <div>
              <h2>{{ titre }}</h2>
              <img src="{{ img }}" alt="">
              <img [src]="img2" alt="" [title]="titreImage">
              <p>{{ p1 }}</p>
              <p [innerHTML]="p2"></p>
              <p [innerHTML]="p3" [ngStyle]="p3Style" ></p>
              <h2 [style]="p3Style">conclusion</h2>  
          </div>  
  `,
  styleUrls: ['./cinquieme.component.scss']
})
export class CinquiemeComponent implements OnInit {
  titre : string = "Découverte du Binding";
  // site internet unsplash source
  // appeler une adresse web => retourner une image
  // https://source.unsplash.com/random/200x150
  img : string = "https://source.unsplash.com/random/200x150";
  img2 : string = "https://source.unsplash.com/random/300x200"
  titreImage :string = "image random"
  p1 :string = "lorem ipsum pour p1";
  p2 : string = "lorem ipsum pour p2";
  // dom : document.getElementById("p").innerHTML = p2 
  p3 : string = "lorem ipsum pour le p3";
  p3Style : Object = {
    color : "red",
    fontSize : "30px",
    fontWeight : "bold"
  }
  constructor() { }

  ngOnInit(): void {
  }

}
