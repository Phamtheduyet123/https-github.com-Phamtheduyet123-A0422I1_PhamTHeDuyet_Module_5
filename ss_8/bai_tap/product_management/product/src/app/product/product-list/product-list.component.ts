import { Component, OnInit } from '@angular/core';
import {Product} from "../../model/product";
import {ServiceProductService} from "../../service/product/service-product.service";

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  products:Product[]=[];

  constructor(private product_service:ServiceProductService) {
    this.product_service.getAll().subscribe(next=>{
      console.log(next);
      this.products=next;
    },error => {

    },() =>{

    });
  }
  ngOnInit(): void {

  }

}
