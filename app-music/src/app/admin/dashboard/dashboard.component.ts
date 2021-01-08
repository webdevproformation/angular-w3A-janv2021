import { Component, OnInit } from '@angular/core';
import { Album } from '../../services/album';
import { FirebaseService } from "../../services/firebase.service"
import { Observable } from 'rxjs';
import {trigger , style , transition , animate} from "@angular/animations";

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
  animations : [
    trigger( "disparition" , [ 
      transition("* => void", [ 
        animate(2000 , style({ opacity : 0 , transform:"translateX(200px)" }))
      ])
    ])
  ]
})
export class DashboardComponent implements OnInit {
  albums : Observable<Array<Album>>
  constructor(  private _firebasemusic : FirebaseService) { }

  ngOnInit(): void {
    this.albums = this._firebasemusic.getAll();
  }

  onClickDelete(id : string){
    this._firebasemusic.delete( id )
  }

  albumCheck(index, album){
    return album ? album.id : undefined ;
  }

}
