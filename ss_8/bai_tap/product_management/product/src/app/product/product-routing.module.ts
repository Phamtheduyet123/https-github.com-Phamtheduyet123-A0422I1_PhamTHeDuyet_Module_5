import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ProductticeComponent} from "./producttice.component";
import {ProductListComponent} from "./product-list/product-list.component";
import {DetailComponent} from "./detail/detail.component";
import {ProductUpdateComponent} from "./product-update/product-update.component";
import {ProductCreateComponent} from "./product-create/product-create.component";


const routes: Routes = [
  {
    path:'product',component:ProductticeComponent,children:[
      {path:'',component:ProductListComponent},
      {path:'detail/:id',component:DetailComponent},
      {
      path:'update/:id',component:ProductUpdateComponent
      },{
      path:"create",component:ProductCreateComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductRoutingModule { }
