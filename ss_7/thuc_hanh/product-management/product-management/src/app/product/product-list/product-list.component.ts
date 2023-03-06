import { Component, OnInit } from '@angular/core';
import {ServiceService} from "../../service/service.service";
import {Product} from "../product";

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  products:Product[]=[];
  constructor(private service:ServiceService) { }

  ngOnInit(): void {
    this.getAll();
  }
  getAll(){
    this.products=this.service.getAll();
  }
}
