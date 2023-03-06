import { Component, OnInit } from '@angular/core';
import {SongService} from "../playlist-app_ss7_thuc_hanh2/service_ss7_thuc_hanh2/song.service";
import {ActivatedRoute, ParamMap} from "@angular/router";
import {DomSanitizer} from "@angular/platform-browser";

@Component({
  selector: 'app-youtube-player',
  templateUrl: './youtube-player.component.html',
  styleUrls: ['./youtube-player.component.css']
})
export class YoutubePlayerComponent implements OnInit {
  song: any;
  // @ts-ignore
  constructor( private songService: SongService,
               private activatedRoute: ActivatedRoute,
               private domSanitizer: DomSanitizer) { }

  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe((paramMap: ParamMap) => {
      const id = paramMap.get('id');
      console.log(id);
      this.song = this.songService.findSongById(id);
    });
  }
  getSrc() {
    const url = 'https://www.youtube.com/embed/' + this.song.id;
    return this.domSanitizer.bypassSecurityTrustResourceUrl(url);
  }



}
