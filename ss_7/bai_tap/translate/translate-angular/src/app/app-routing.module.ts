import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {DectionaryPageComponent} from "./Dictionary/dectionary-page/dectionary-page.component";
import {DetailComponent} from "./Dictionary/detail/detail.component";

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
    path: 'page',
    component: DectionaryPageComponent
    // children: [{
    //   path: '',
    //   component:
    // }]
  },{
  path:'detail/:id',
    component:DetailComponent
  }

]
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
