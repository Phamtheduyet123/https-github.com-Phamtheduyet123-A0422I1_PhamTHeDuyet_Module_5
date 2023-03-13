import { Component, OnInit } from '@angular/core';
import {ServiceProductService} from "../service/product/service-product.service";
import {FormControl, FormGroup} from "@angular/forms";
import {Product} from "../model/product";
import {Category} from "../model/category";
import {ServiceCategoryService} from "../service/category/service-category.service";
import {Router} from "@angular/router";
import {ToastrService} from "ngx-toastr";

@Component({
  selector: 'app-product-create',
  templateUrl: './product-create.component.html',
  styleUrls: ['./product-create.component.css']
})
export class ProductCreateComponent implements OnInit {
  categorys:Category[]=[];
  productForm:FormGroup;
  product:Product={};
  constructor(private serviceCategory:ServiceCategoryService,
              private service:ServiceProductService,private router:Router,
              private toast:ToastrService) {
    this.buildForm();
    this.serviceCategory.getAll().subscribe(next=>{
      this.categorys=next;
    },error => {

    },()=>{

      });
  }
  buildForm(){
    this.productForm=new FormGroup({
      id:new FormControl(),
      name:new FormControl(),
      price:new FormControl(),
      description:new FormControl(),
      category:new FormControl()
    })
  }
  ngOnInit(): void {
  }

  submit() {
    this.product=this.productForm.value;
    this.service.createProduct(this.product).subscribe(next=>{
      next.push(this.product);
    },error => {

    },()=>{

    });
    this.toast.success("Thêm mới thành công");
    this.router.navigateByUrl("");
  }
}
