import { Component, Input, OnInit , OnChanges } from '@angular/core';

import { Album } from "../services/album";
import { MusicService } from './../services/music.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit , OnChanges {
  @Input() albumAAfficher : string;
  albumEncours : any ;
  constructor(private musicService : MusicService) { }

  ngOnChanges(): void{
    this.albumEncours = this.musicService.findAlbumComplet(this.albumAAfficher);
  }

  ngOnInit(): void {
    this.albumEncours = this.musicService.findAlbumComplet(this.albumAAfficher);
  }

}
