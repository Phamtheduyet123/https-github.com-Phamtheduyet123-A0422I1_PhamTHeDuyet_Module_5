import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {PlaylistAppComponent} from "./playlist-app_ss7_thuc_hanh2/playlist-app.component";
import {YoutubePlayerComponent} from "./youtube-player/youtube-player.component";

//thuc hanh ss_7 bai 1
// const routes: Routes = [
//   {
//     path: 'timelines',
//     component: TimelineAppComponent
//
//   }
// ];
const routes: Routes = [
  {
    path: 'youtube',
    component: PlaylistAppComponent,
    children: [{
      path: ':id',
      component: YoutubePlayerComponent
    }]
  }
]
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
