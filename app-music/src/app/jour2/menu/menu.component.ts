import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {
  show: boolean = false;
  constructor() { }

  ngOnInit(): void {
  }

  onClickMenu($event:any) :void{
    console.log($event);
    // 1ère partie et // 2eme partie 
    if($event.target.innerHTML == "Afficher le menu"){
      $event.target.innerHTML = "Masquer le menu";
      this.show =  false ;
    }else{
      $event.target.innerHTML = "Afficher le menu";
      this.show = true ;
    }
  }

}
