import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ProductListComponent} from "./product-list/product-list.component";
import {ProductCreateComponent} from "./product-create/product-create.component";
import {ProductUpdateComponent} from "./product-update/product-update.component";
import {DetailComponent} from "./detail/detail.component";


const routes: Routes = [
  {
    path:"",
    component:ProductListComponent
  },
  {
   path:"create",
    component:ProductCreateComponent
  },
  {
    path:"update/:id",
    component:ProductUpdateComponent
  }
  ,{
    path:"detail/:id",
    component:DetailComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
