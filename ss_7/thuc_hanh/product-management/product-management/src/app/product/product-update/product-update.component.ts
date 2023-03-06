import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";
import {ServiceService} from "../../service/service.service";
import {ActivatedRoute, Router} from "@angular/router";
import {Product} from "../product";

@Component({
  selector: 'app-product-update',
  templateUrl: './product-update.component.html',
  styleUrls: ['./product-update.component.css']
})
export class ProductUpdateComponent implements OnInit {
  id:number;
  product1:Product={};
  product:Product={};
  productForm: FormGroup = new FormGroup({
    id: new FormControl(),
    name: new FormControl(),
    price: new FormControl(),
    description: new FormControl(),
  });
  constructor(private productService: ServiceService,
  private router:Router,
  private activatedRoute:ActivatedRoute) {
    this.activatedRoute.paramMap.subscribe(next=>{
      const id=next.get('id');
      if(id!=null){
        this.id=parseInt(id);
        this.product=this.productService.findById(parseInt(id));
      }
    },error => {

    },()=>{

    });
  }

  ngOnInit(): void {
  }
  submit(){
    this.product1=this.productForm.value;
    this.product.name=this.product1.name;
    this.product.price=this.product1.price;
    this.product.description=this.product1.description;
    this.router.navigateByUrl("product/list");
  }
}
