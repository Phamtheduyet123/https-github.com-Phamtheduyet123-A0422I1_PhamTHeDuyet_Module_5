import { Component, OnInit } from '@angular/core';
import {SongService} from "./service_ss7_thuc_hanh2/song.service";
import {Song} from "./model/song";

@Component({
  selector: 'app-playlist-app',
  templateUrl: './playlist-app.component.html',
  styleUrls: ['./playlist-app.component.css']
})
export class PlaylistAppComponent implements OnInit {
  playlist: Song[] = [];
  constructor(private songService: SongService) { }


  ngOnInit(): void {
    this.getAll();
  }
  getAll() {
    this.playlist = this.songService.playlist;
  }
}
