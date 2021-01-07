import { Component, OnInit, Output , EventEmitter } from '@angular/core';

import { Album } from "../services/album";

import { MusicService } from './../services/music.service';
import { FirebaseService } from './../services/firebase.service';

@Component({
  selector: 'app-albums',
  templateUrl: './albums.component.html',
  styleUrls: ['./albums.component.scss']
})
export class AlbumsComponent implements OnInit {
  @Output() change = new EventEmitter();
  albums :Array<Album>|null ; 
  constructor( private musicService : MusicService , private _firebasemusic : FirebaseService) { }
  ngOnInit(): void {
   // this.albums = this.musicService.getAll() ;
    this._firebasemusic.getAll().subscribe( response => {
      this.albums = response;
    })
  }
  onClickShowAlbum( $event, id ){
    $event.preventDefault();
    //alert(id);
    this.change.emit(id)
  }
}
