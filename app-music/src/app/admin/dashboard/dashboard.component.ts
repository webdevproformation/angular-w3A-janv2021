import { Component, OnInit } from '@angular/core';
import { Album } from '../../services/album';
import { MusicService } from "../../services/music.service";

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  albums : Array<Album>
  constructor( private _music : MusicService) { }

  ngOnInit(): void {
    this.albums = this._music.getAll();
  }

  onClickDelete(id : string){
    this._music.delete( id )
  }

}
