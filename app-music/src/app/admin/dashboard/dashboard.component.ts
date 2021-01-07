import { Component, OnInit } from '@angular/core';
import { Album } from '../../services/album';
import { MusicService } from "../../services/music.service";
import { FirebaseService } from "../../services/firebase.service"
import { Observable } from 'rxjs';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  albums : Observable<Array<Album>>
  constructor( private _music : MusicService , 
               private _firebasemusic : FirebaseService) { }

  ngOnInit(): void {
    this.albums = this._firebasemusic.getAll();
  }

  onClickDelete(id : string){
    this._music.delete( id )
  }

}
