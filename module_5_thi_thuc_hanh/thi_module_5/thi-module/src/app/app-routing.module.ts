import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ListLoHangComponent} from "./component/list-lo-hang/list-lo-hang.component";
import {CreateLoHangComponent} from "./component/create-lo-hang/create-lo-hang.component";


const routes: Routes = [
  {
    path:"",
    component:ListLoHangComponent
  },
  {
    path:"create",
    component:CreateLoHangComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
