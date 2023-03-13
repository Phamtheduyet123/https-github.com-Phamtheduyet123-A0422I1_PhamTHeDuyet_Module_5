import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductRoutingModule } from './product-routing.module';
import { ProductticeComponent } from './producttice.component';
import {HttpClientModule} from "@angular/common/http";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {ProductCreateComponent} from "./product-create/product-create.component";
import {ProductUpdateComponent} from "./product-update/product-update.component";
import {ProductListComponent} from "./product-list/product-list.component";
import {DetailComponent} from "./detail/detail.component";
import {ServiceProductService} from "../service/product/service-product.service";


@NgModule({
  declarations: [
    ProductticeComponent,
    ProductCreateComponent,
    ProductUpdateComponent,
    ProductListComponent,
    DetailComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ProductRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
  ],
  providers:[
    ServiceProductService
  ]
})
export class ProductModule { }
