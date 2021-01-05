import { Component, Input, OnInit } from '@angular/core';
import { AuthService } from './../services/auth.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {
  @Input() title : string ;

  constructor( public auth : AuthService) {}

  ngOnInit(): void {}

  onClickDeconnexion(){
    // dans cette méthode que l'on va appeler la méthode logout !! 
    this.auth.logout();
  }

}
